<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <div class="row justify-center">
        <div class="width1">
          <input v-focused @keyup.enter="barcodeEnter" ref="barcodeEl" />
        </div>
      </div>
      <div class="row justify-center">
        <div class="width1">
          <input @keyup.enter="pinEnter" ref="pinEl" type="password" />
        </div>
      </div>
      <div class="row justify-center" v-for="item in rows">
        <div class="width1">
          <img :src="item.img"  class="responsive" />
        </div>
      </div>
    </div>


    <q-modal class="maximized" ref="productModal">
      <my-product :product="product"></my-product>
    </q-modal>
    <q-modal class="maximized" ref="balanceModal">
      <my-balance :balance="balance"></my-balance>
    </q-modal>
  </div>
</template>

<script>
import { Loading, Toast } from 'quasar';

export default {
  methods: {
    process( code, pin ){
      let modalProm;
      if( code.length > 6 ){
        modalProm = this.fetchProduct(code).then( product => {
          this.product = product;
          return this.$refs.productModal;
        });
      } else {
        modalProm = this.fetchBalance(code, pin).then( balance => {
          this.balance = balance;
          return this.$refs.balanceModal;
        });
      }
      modalProm.catch( err => {
        console.log(err);
        Toast.create.negative({
          html: `${err.name}: ${err.message}`,
          timeout: 3000
        });
      }).then( modal => {
        Loading.hide();
        if( !modal ){ return; }
        modal.open( () => this.showingModal = true );
        setTimeout( () => {
          modal.close( () => this.showingModal = false );
        }, 7000);
      });

    },
    barcodeEnter( e ){
      if( this.showingModal ){ return; }
      this.barcode = e.srcElement.value;
      if( this.barcode.length > 6 ){
        this.process(this.barcode);
        this.$refs.barcodeEl.value = '';
        this.$refs.barcodeEl.focus();
      } else {
        this.$refs.pinEl.focus();
      }
    },
    pinEnter( e ){
      let pin = e.srcElement.value;
      e.srcElement.value = '';
      this.$refs.barcodeEl.value = '';
      this.$refs.barcodeEl.focus();
      this.process(this.barcode, pin);
    },
    fetchBalance(code, pin){
      Loading.show();
      return fetch(`https://db.nca.edu.ni/api/api_ewapp.php?barcode=${code}&mode=student&query=credit&history=5&password=${pin}`).then( res => res.json() );
    },
    fetchProduct(code){
      Loading.show();
      // return fetch('').then( res => res.json() );
      return Promise.resolve({});
    }
  },
  data(){
    return {
      balance: {},
      product: {},
      barcode: '',
      showingModal: false,
      pin: '',
      rows: [
        {
          img: 'http://www.scapromotions.com/wp-content/uploads/2014/10/sca-consumer-products-icon.jpg',
          type: 'products'
        }, {
          img: 'http://alchemy.media/wp-content/uploads/2016/01/icon-tax-copy.png',
          type: 'credits'
        }
      ]
    };
  }
};
</script>

<style>
img {
  width: 250px;
  height: auto;
}
</style>
