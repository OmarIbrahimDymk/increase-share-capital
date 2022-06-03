const IncreaseShareCapital = {
  data() {
    return {
      title: "Increase Share Capital",
      shareCapital: 25000,
      originalPayment: 300,
      fee: 0,
      removePayment: true,
    };
  },
  created() {
    this.getFee(this.shareCapital, this.originalPayment);
  },
  methods: {
    calculateFee: myCalculateFee,
    getFee(shareCapital, originalPayment) {
      if (this.removePayment) {
        this.fee = this.calculateFee(shareCapital) - originalPayment;
      } else {
        this.fee = this.calculateFee(shareCapital);
      }
    },
  },
};

Vue.createApp(IncreaseShareCapital).mount("#app");
