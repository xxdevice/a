// ★STEP2
// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}


// ★STEP1
var app = new Vue({
  el: '#app',
  data: {
    isSheat:true,isCreate:false,isFinish:false,
    // ★STEP5 localStorage から 取得した ToDo のリスト
    todos: [],
    // ★STEP11 抽出しているToDoの状態
    current: -1,
    // ★STEP11＆STEP13 各状態のラベル
    keyword: "",
    weapons: [],
    options: [
      { value: -1, label: 'すべて' },
      { value: 0 , label: '作成中' },
      { value: 1, label: '作成済' }
    ]
  },

  computed: {
    // ★STEP12

    computedCreate: function () {
      return this.todos.filter(function (el) {
        return el.state == 0
      }, this)
    },
    computedFinish: function () {
      return this.todos.filter(function (el) {
        return el.state == 1
      }, this)
    },

    // ★STEP13 作業中・完了のラベルを表示する
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
      // キーから見つけやすいように、次のように加工したデータを作成
      // {0: '作業中', 1: '完了', -1: 'すべて'}
    }
  },

  // ★STEP8
  watch: {
    // オプションを使う場合はオブジェクト形式にする
    todos: {
      // 引数はウォッチしているプロパティの変更後の値
      handler: function (todos) {
        todoStorage.save(todos)
      },
      // deep オプションでネストしているデータも監視できる
      deep: true
    }
  },

  // ★STEP9
  created() {
    // インスタンス作成時に自動的に fetch() する
      this.todos = todoStorage.fetch()
      var self = this;
      axios
          .get('./weapons.json')
          .then(function(response) {
              self.weapons = response.data;
          })
          .catch(function(error) {
              console.log('取得に失敗しました。', error);
          })
  },

  methods: {

    // ★STEP7 ToDo 追加の処理
    doAdd: function(device,value) {
    },
    // addTiket: function(value,check) {
      
    // },
    // ★STEP10 状態変更の処理
    doChangeState: function (item) {
      item.state = !item.state ? 1 : 0
    },

    // ★STEP10 削除の処理
    doRemove: function (item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  },
})