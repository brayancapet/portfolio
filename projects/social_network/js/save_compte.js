"use strict";

function save_compte(comptes) {
  var account = JSON.stringify(comptes);
  localStorage.setItem("account", account);
}
