let app = new Vue({
  el: "#app",
  data: {
    text: "",
    list: []
  },
  computed: {
    total: function () {
      return this.list.reduce((prev, next) => {
        return prev + next.numero;
      }, 0);
    }
  },
  methods: {
    submit: function () {
      const obj = {
        id: `${new Date().getTime()}`,
        numero: Number(this.text),
        date: `${new Date()}`
      };
      this.list.push(obj);
      this.text = "";
    },
    deleteAll: function () {
      const newList = [];
      this.list = newList;
    },
    deleteItem: function (event) {
      const newList = this.list.filter(
        item => item.id !== event.target.id
      );
      this.list = newList;
    }
  }
});