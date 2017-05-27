<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <div class="row justify-center">
        <div class="width1">
          <img class="responsive" src="http://alchemy.media/wp-content/uploads/2016/01/icon-tax-copy.png" />
          <br>
          {{ balance.person_name }}
          <br>
          <img class="responsive" src="statics/student.png" />
          <br>
          {{ '$' + balance.credit_student }}
          <br>
          <img class="responsive" src="statics/family.png" />
          <br>
          {{ '$' + balance.credit_family }}
        </div>
      </div>
      <div class="row justify-center large-gutter">
        <div class="width-2of3">
          <div class="list">
            <div class="list-label">Transactions</div>
            <div class="item" v-for="item in balance.transactions">
              <div class="item-content">
                {{ item.credhist_datetime }}
                <br>
                <b>{{ '$' + item.credhist_debit }}:</b> {{ item.credhist_description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: Object,
      default: () => ({
        ha: 'ha, ha'
      }),
      required: true
    }
  }
};
</script>

<style>
</style>
