const contract = require('truffle-contract');

const metacoin_artifact = require('../build/contracts/MetaCoin.json');
const datastore_artifact = require('../build/contracts/DataStore.json');
var MetaCoin = contract(metacoin_artifact);
var DataStore = contract(datastore_artifact);

module.exports = {
  start: function(callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    self.web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      self.account = self.accounts[2];

      callback(self.accounts);
    });
  },
  getData: function(account, callback){
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    DataStore.setProvider(self.web3.currentProvider);

    var meta;
    DataStore.deployed().then(function(instance) {
      meta = instance;
      return meta.getHistorical.call(account, {from: account});
    }).then(function(value) {
      console.log("value");
      console.log(value);
      callback(value.valueOf());
    }).catch(function(e) {
      console.log(e);
      callback("Error 404");
    });
  },
  setData: function(account, patientId, hash, callback){
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    DataStore.setProvider(self.web3.currentProvider);

    var meta;
    DataStore.deployed().then(function(instance) {
      meta = instance;
      return meta.setHistorical.call(account, patientId, hash, {from: account});
    }).then(function() {
      //console.log("value");
      //console.log(value);
      callback(true);
    }).catch(function(e) {
      console.log(e);
      callback("Error 404");
    });
  },
  refreshBalance: function(account, callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account, {from: account});
    }).then(function(value) {
        callback(value.valueOf());
    }).catch(function(e) {
        console.log(e);
        callback("Error 404");
    });
  },
  sendCoin: function(amount, sender, receiver, callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.sendCoin(receiver, amount, {from: sender});
    }).then(function() {
      self.refreshBalance(sender, function (answer) {
        callback(answer);
      });
    }).catch(function(e) {
      console.log(e);
      callback("ERROR 404");
    });
  }
}
