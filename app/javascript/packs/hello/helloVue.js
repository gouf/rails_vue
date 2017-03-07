users = JSON.parse(gon.users)

Vue.component('hello', {
  template: '<h1>Hello</h1>'
})

Vue.component('users-table', {
  template: ''.concat(
    '<div>',
      '<table>',
        '<thead>',
          '<tr>',
            '<th>ID</th>',
            '<th>名前</th>',
            '<th>作成日時</th>',
            '<th>更新日時</th>',
          '</tr>',
        '</thead>',
        '<tbody v-for="user in users">',
          '<tr>',
            '<td>{{ user.id }}</td>',
            '<td>{{ user.name }}</td>',
            '<td>{{ user.created_at }}</td>',
            '<td>{{ user.updated_at }}</td>',
          '</tr>',
        '</tbody>',
      '</table>',
    '</div>'
  ),
  data: function() {
    return {
      users: users
    }
  }
})

$(function() {
  new Vue({
    el: '#hello'
  })
})
