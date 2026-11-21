/* Black Friday sale: shows sale prices until the end time, then the page goes back to regular prices on its own. */
(function(){
  var END = Date.parse('2026-12-01T04:59:59Z'); // Mon Nov 30, 11:59 PM Eastern
  var START = Date.parse('2026-11-21T00:00:00Z');
  var now = Date.now();
  if (now < START || now > END) return;
  document.querySelectorAll('[data-sale]').forEach(function(el){
    el.innerHTML = '<s class="was">' + el.getAttribute('data-reg') + '</s> ' + el.getAttribute('data-sale');
  });
  document.querySelectorAll('.sale-only').forEach(function(el){ el.hidden = false; });
})();
