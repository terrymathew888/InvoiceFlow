<template>
  <div class="home container">
    <!--Header-->
    <div class="header flex">
      <div class="left left flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="">
          <ul v-show="filterMenu" class ="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="">
          </div>
          <span>New Invoice</span>
        </div>
      </div>
  </div>
  <!-- Invoices -->
   <div>
    <Invoice v-for="(invoice, index) in invoiceData" v-bind:invoice="invoice" :key="index" />
   </div>
</div>
</template>

<script>
import Invoice from"../components/Invoice";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    };
  },
  components: {
    Invoice,
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE']),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    // Toggles the visibility of the filter menu
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
  computed: {
    ...mapState(['invoiceData']),
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      // Aligns the right section to the end and centers items vertically
      justify-content: flex-end;
      align-items: center;

      .button {
        // Styles for the "New Invoice" button
        display: flex;
        align-items: center;
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          // Styles for the plus icon container inside the button
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;

          img {
            // Plus icon size
            width: 10px;
            height: 10px;
          }
        }

        span {
          // Text size for "New Invoice"
          font-size: 12px;
        }
      }

      .filter {
        // Styles for the filter dropdown trigger
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        span {
          // Text size for "Filter by status"
          font-size: 12px;
        }

        img {
          // Arrow icon next to filter text
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          // Dropdown menu styles
          width: 120px;
          position: absolute;
          top: 25px;
          left: 0;
          list-style: none; // Removes bullet points
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 0;
          margin: 0;

          li {
            // Styles for each filter option
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              // Hover effect for filter options
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
}

</style>