window.addEventListener('load', carregado);

var db = openDatabase('myDBs', '1.0', 'Sunrise Database', 2 * 1024 * 1024);

function carregado() {
  document.getElementById('btn-salvar').addEventListener('click', salvar);
  // document.getElementById('btn-deletar').addEventListener('click', deletar);

  db.transaction(function (tx) {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS myTable ( id INTEGER PRIMARY KEY,nome TEXT,senha TEXT, email TEXT)'
    );
  });
}

function salvar() {
  var id = document.getElementById('field-id').value;
  var nome = document.getElementById('field-name').value;
  var pass = document.getElementById('field-pass').value;
  var mail = document.getElementById('field-email').value;

  db.transaction(function (tx) {
    if (id) {
      tx.executeSql(
        'UPDATE myTable SET nome=?, senha=?, email=? WHERE id=?',
        [nome, pass, mail, id],
        null
      );
    } else {
      tx.executeSql(
        'INSERT INTO myTable ( nome,senha,email) VALUES (?, ?, ?)',
        [nome, pass, mail]
      );
    }
  });
}

function atualizar(_id) {
  var id = document.getElementById('field-id');
  var nome = document.getElementById('field-name');
  var pass = document.getElementById('field-pass');
  var mail = document.getElementById('field-mail');

  id.value = _id;

  db.transaction(function (tx) {
    tx.executeSql(
      'SELECT * FROM myTable WHERE id=?',
      [_id],
      function (tx, resultado) {
        var rows = resultado.rows[0];

        nome.value = rows.nome;
        pass.value = rows.senha;
        mail.value = rows.email;
      }
    );
  });
  inputSHOW(true);
}

function deletar() {
  var id = document.getElementById('field-id').value;

  db.transaction(function (tx) {
    tx.executeSql('DELETE FROM myTable WHERE id=?', [id]);
  });
}
