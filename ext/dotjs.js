$.ajax({
  url: 'http://localhost:3131/'+window.location.host.match(/(?:www\.)?([^:]*)/)[1]+'.js',
  dataType: 'text',
  success: function(d){
    $(function(){ eval(d); });
  },
  error: function(){
    console.log('no dotjs server found at localhost:3131');
  }
});
