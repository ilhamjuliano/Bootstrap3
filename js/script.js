// event link pada saat di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap element
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html').animate({            
      scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'swing');

	e.preventDefault();
	
});