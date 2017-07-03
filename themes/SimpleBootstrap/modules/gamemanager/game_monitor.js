$(document).ready(function(){
        $('.monitorbutton.size').click(function(){
                $(this).addClass('loading');
                $(this).bind("DOMSubtreeModified",function(){
                        $(this).removeClass('loading');
                });
        });

	$('#execute_operations').click(function(){
		$(this).replaceWith('<button id="execute_operations" class="btn btn-sm btn-primary" disabled=""><i class="fa fa-refresh fa-spin"></i> <span>Loading...</span></button>');
	});

	$('tr.maintr td:last-child').css('width','').css('padding','');

	$('table#servermonitor').wrap('<div class="table-responsive"/>');
	$('table#servermonitor td > a').addClass('label').addClass('label-primary').addClass('label-size');

	$('img[src="images/magnifglass.png"]').replaceWith('<i class="fa fa-search" aria-hidden="true"></i>');

	$('.main').addClass('main-content');

        $('[id^="refreshed"]').bind("DOMSubtreeModified",function(){
                $(this).find('.upload-image').addClass('btn').addClass('btn-sm').addClass('btn-primary');
		$(this).find('.player_monitor').css('border', '').addClass('table').addClass('table-sm').addClass('table-striped');

	});

        $('img[src="images/stop.png"]').attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACPVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qcjBRAAAAvnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCREVGR0lKS0xNTk9QUVJUVVZXWFlbXF1eX2FiY2RmZ2hpa2xtb3Bxc3R1d3h5e3x+f4CCg4WGiImLjI6PkZKUlZeYmpudnqCio6WmqKqrra+wsrS1t7m6vL7AwcPFx8jKzM7P0dPV19na3N7g4uTm6Onr7e/x8/X3+fv9X+0ySAAADSFJREFUGBnlwYljVeWdBuD3O7lLbhKykISlsmkgKJIPXCgBpcPaYaB1BAtMoaBFUYxUR1YRQSiWJVB2lB2kBBLEkAQSst33bxtEqiz3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');
        $('img[src="images/start.png"]').attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACPVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qcjBRAAAAvnRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCREVGR0lKS0xNTk9QUVJUVVZXWFlbXF1eX2FiY2RmZ2hpa2xtb3Bxc3R1d3h5e3x+f4CCg4WGiImLjI6PkZKUlZeYmpudnqCio6WmqKqrra+wsrS1t7m6vL7AwcPFx8jKzM7P0dPV19na3N7g4uTm6Onr7e/x8/X3+fv9X+0ySAAADoNJREFUGBnlwYuDjeW+B/Dv866bNTPmzrCb0WgYhUGpbWjbx0jlsHdSGzs2tYWk1Mk1uTxJu5gc5FIYt2SYkRjDjLFmre/fdpDKZV1+z/s+77vW6nw+CJaK1Y6btXjdriM/Xhvk71K9F4/v+XjZyy0jShz8QYWHty7/4hJz6/lmTVtDDH8k4Yb5n1+lmf79bzUPwR9ArGXdJbrVu+3FchQxZ/Sqbnp1c8vkCIpRdPreJC05+bdyFJdo2xHa1bmoAsXCmdxOP5ydE0URqP0wQd98OQaFTU0/Q39deyOKghV7q4/+S22qRkEq38ygfPskCk7N5wxSxzgUlKqvGLRzzSgYZTuYD8dHoSBE1jFf2iuQd2reLebRhxHkV+Ml5tfALORR5FPm3/FK5Mv0PhaEFQr5MPQwC8XlJgTvHykWkB1hBCv+HQvL1QYEaeoAC85yBMb5lIXoRCmCMbybhel2K4Iwn4XrMwW/qU9ZyDpi8Ff0OAvb9Tr4qfYaC12yFf55fpBFYBX8soLFod2BLzawWJwIwz61i8XjfBS2qXYWk+4S2BU6yuLSUwGbIqdZbPqGwZ7IBVqUOr/34yX/NX5kTUXpkGg4MqS0vLpu7PTX3999MkGLbg+HLaFTtOTsJ3ObShUyitX/9b3DSdrRVwE71BFakPjm9YYQJFTt7B03aEFPCWxQe+nZxaV1MFP28hF6djkKC3bSoyNzyuBG5LmdSXpzPgzP/oeeXHmjBO6FZpygJycceLSUHiS3NMCr8uW99GA/vJlM9/oWRWCDau2ke2vhRXWCbv3U5sCa5mN07S9wL3KFLnVNhl0jDtGl1Ai4pY7SnRuzFaxrOkt3eofApQ10JbHYgS+ev0JXTiu48hJd2R6FX9QbSbqxE25UJenC5Sb4qfQg3fgLzKkLdGGFgs+m3aS5RBmMfURzZyvhv/BOmjulYGg8zb2nEIgZCRpbCTOxPpq60YyglHbQWCOMHKSpbyIIjvo3TfWEYWAuTb2DYE1K0NBuyMUTNJN8AUGrukJDT0Psa5q5NgzBixylmZ8dCLXQzKko8kFtppnVkAn10MgRB3myhmZqIPIBjexVyJslNHIKEsNpZIdCHr1KI69A4CxNbEI24ScmjKtW8NEMmrgdQ04v0sQuZDHpMO8aWFcC/7xME5uRi9NLA+0KGVWf469Sq0LwzWKaqEEOS2ngqEJGk5N8QG8rfLOaBg4hu9gg5c6EkNHTfMSJ4fDLRhoYg6zWUe56DBnFbvExGyPwh/qWcmeQTTxFsdQIZLaBaQy8An+EL1OuBVlsotyLyCzM9H5shC8qb1OsE5mVUu49ZDGRmeyOww8TKDcFGa2n2GFks5QZDS5S8MEyiv2ATGIpSvXHkM0mZnFlAnzwPcWakcFKirUgq13M6kA5rCsZoNRJpBe6TalPkJ1mDqtCsO0Fio1EWnMo1ekgO81cbrTCtm2U0kjrMqXqkINmbieHw65QD6XiSKOZUh8gF02JjRFYNZlSbyONdgr1hJCLpsjAqwo27aNQn8Jj4pRqQU6aQhcaYVE8QaFJeMxiCn2N3DTFvojDnvkUOoTH9FAmVYrcNOWSixWsuUihUjxiFIXWQEDTxJWJsGUChd7AIzZQ5nYEAppmDlbAkuOU6cbDnARlFkJC09TqEKyop9BwPGQ8Za47kNA0dmM6rPiaMu/iIZ9RZhZENF04WQcLqihzDQ9SCYrcVBDRdGVTBN61U2YYHjCGMm9CRtOdgVcVvGqgzDI84COKDEYgo+nWhUZ4dYoiXXjAdYqshZCme1/E4U0LZUrxmyrKlEJI04PkYgVPLlPkr/jNf1NkP6Q0PbkyEV78nSJf4TcHKDIJUpoeHaqAe0MoklS4TyUpcUtBStOzNSG49g1F6nDfCIqshZimdzdmwK0WiszHfa9RpBZimjZ01MEddYsS3+C+dkp0QU7Tjs1RuPIhJQYVfnGbEsshp2nJwFwFF5ooUol7hlJkJOQ0rbkwGuacJCWm4Z5nKdEPA5oW7YnD2B5KfIh73qXERhjQtCm5RMHQNEqcwz2HKTEeBjTt+rkFZqIUUbjrNiUiMKBp26EKGLlAiQrcEafEJZjQtG9NCAbep0QL7mikxIcwoemDGzMgN4USi3HHLEpMhQlNX3TUQaqEEttxxypKlMGEpk+2RCF0gwI/4I59FOiHEU2/DMxVENlJgRTuuEKBgzCi6Z/O0ZBYSIkYAEqshhFNP31ZgtzGU2IYEKXETBjR9FXynw5yqaTE00A1JephRNNnP7cgB4cSs4ExlIjBiKbvDlUiu8sUWA60UiAJM5oBeC+EbPZQYCMwjwJdMKMZhJsvIov3KfA1sIICB2FGMxgddchoIQVOAZ9QYCvMaAZlSxgZTKdAD/AFBVbAjGZgbjQgvbEUSAEHKPAKzGgGJ9WMtIZRQuEkBZ6DGc0ADZYhnRJKOLhIgfEwoxmkQ0gnRokIrlKgCWY0A1WLNMKUGIIbFBgFM5qBegtpOJQowS0KjIQZzUAdRBqKEmUYpEAtzGgG6hrSoUQ5KFEFM5qBSiAdSlQgSYFamNEMVA/SoUQ5BigwAmY0A3UEaShKlOEmBUbBjGag3kEaDiVKcI0CTTCjGagRSCNMiTguUeAZmNEM0gmkE6VEFB0UmAIzmgFKVSOdOCVCOEiBl2BGM0DTkFYNJRT2UGAZzGgGJtGC9JooAWyiwCaY0QzK3jgymEaBG8C/KbAfZjSD0dWMjF6jwBng7xTohBnNICQWKGS2hgLtwAwKDMKMZgC2x5CNpsAWYBwlIjCi6buz9ciukwLvALWUGAEjmj7rb0MOihJzgBglWmFE01/rw8hlKCUmAIoS78CIpp+OVSO3ZkrUAeihwD4Y0fRPz1RIzKdEHMD/UqAXRjT9klrhQGQrJRSAtZSIw4SmT/aVQegqBTpxx0uUaIEJTV90NUNqCCU+xx1NlFgNE5o+SCxQEBtPiWW4o5QS52BC077tMRhYSYlncdcgJUIwoGnb2XoYOU2Jatz1PSWaYEDTrv42mAlTxMFdaymxDgY0rVofhqFJlLiIe6ZR4joMaFp0rBrGtlFiA+6ppEgN5DSt6ZkKc2qAEjNxj0pS4k3IaVqSWuHAhQaK1OAX31LiHOQ07dhXBldWUiKl8IvFFCmHmKYN3c1wqZcSR3DfKIr8C2Ka3iUWKLjURJE3cZ9DkV6IaXq2PQbXNEXq8atjFBkDKU2PztbDvUiKIg5+tZAin0NK05P+NngxmyIH8ZthFElFIaTpxfowPDlPkZfxu36KLIWQpnvHauDNaMpU4HdbKXLLgYymWz1T4dUhilzDAyZSZg5kNN1JrXDgVS1lVuMBTooiPyuIaLqyrwzebafME3jQl5R5DiKaLnQ3w4ISyvThIVMp06UgoWkssUDBhq2UWY+HhJKUaYOEpqntMVhRRaEGPGwnZXodCGiaOVsPS9op04NHNFNoEQQ0TfS3wZZRFFqOR6h+yiQiyE3TwPowrOmgUBUetZJCm5GbptixGtjTSqEOPKaCUqOQk6ZQz1RYFOmjUCsed4xCFxVy0RRJrXBg01YKJRw8bgqlliAXTYl9ZbDqSUp9gDRUL4VSQ5GDZm7dzbBLXaJUBdJZSKnjyEEzl8QCBcvepdR+pBVJUWoZstPMYUcMtj1FsaeQ3scUq0dWu5jVuXpYF7lOqQvIoIxiV0PIZjOz6G+DD76m2FRksp1iu5HNcma2PgwfzKHYT8ioinKvIYspzORYDfwwMkWxmchsD+XGIrMI0+uZCl8M6aXYVYXMKik3MBSZ7WAaqRUOfOGcptwMZLONcpdCyKhkkI/ZVwaf7KJcF7IqpYEDChlN4yO6m+GXZTTwLLJbRwO7kdlsPiixQMEv82jgFHKI3KKBzcis/if+ZkcMvnmRJuqRyzyaWIvMVOtR3pXYUgP/tNDEl8hJddPEv5BNqPapxkoFHzWlaCBVhtyeopHVyKeJKZpYAontNLIB+TODRi4qSET6aWSXQp7Mo5lRkJlJM+0O8mIZzWyB1DGa+aEEwVO7aKYvDKmKFM3cbEDQhpymoVbILaOplxCskb009C0MqNM0tdFBgF5K0dCtITAxNEFTndUISuQrGpsCMzNpLDUPwRjdQ2ObYWo3ze2PwX9qJc11OTAVvkpzA23w26hLdGEYzNXTjeNV8FN4C914HW4spSvvOPDNtJt04wDc+Yqu9MyAP+pP0pXuMNxxztOdC+NgX+U+unO7Am6V9NGlY3+CXfFNdOsZuDeKrn3XDHtqttG1N+HFy3Svs1XBisYDdG8nvPmEHlz/Zxm8Cs86Rw9OKXj0H3py9AUHHjTuSNGLrgi8UofoTWLTMw7cUH96+xq9uRqHd84JepVqnxmHmdCELbfo1c2hsCF8nhZ0f/R8GWRi494+SQsGamBHtJt29H3+xsRKB5mp0qa5G3+iHYNPwJb4NVp05T/rFs4YO6wkGnYUAOWEo0OqG5+f/+7O87QoNRb2lF5msRkcC5tiP7K4DDwBu8IdLCY3a2Cbc5jF4+pQ2Kf2slh0xeEHtY3F4XQUPlnIYrBLwTfNAyx4i+Gn8i4Wttvj4a/wARayy5Xw3VoWrkNhBGB8HwvUPxCM2EEWou46BGZBigVnm4MADbvEwjLwAoLlbGAhORpH4Bo6WSj6/4J8UIuSLAjbI8iTskPMv+6nkEetN5lfqeUKeRV+j/m0txx5V/YV8+VcIwpC/XfMh5/+jIIx5gyD1jNLoZCM62CQrs5WKDSNhxmUrlaFQlS7NcUAfNuMghVddJ3+Gvy4GgVNPd1O/5ybGULhi/+tk37oXVmDYlGz/ArturVhNIpLzeILtOX6uicVilB8+u4EPTsyrwrFSw2buzdB175f8qSD4lfxwrozNNW9tW2Ygz8OVT5x0fZzSQp0f/n2n2sd/DHFap+evXzzvtPX+ai+8wc+WzV30ogShf8fVCgaLy0rr6wYWhqPhRTy5f8Ad2pUPhDokj4AAAAASUVORK5CYII=');
        $('img[src="images/restart.png"]').attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACKFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////97JdjgAAAAt3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojw9P0BBQkNERUZJSktMTU5PUFFSVFVXWFlbXF1eX2FiY2RmaGlrbG1vcHFzdHV3eHl7fH5/gIKDhYaIiYuMjo+RkpSXmJqbnZ6goqOlpqiqq7CytLW3ubq8vsDBw8XHyMrMzs/R09XX2drc3uDi5Obo6evt7/Hz9ff5+/3H7WG5AAAKC0lEQVQYGe3BiV9VZR4H4O853OsFQYErphFjmArk2qKFLZOKTJaZmmONuYaDOJopGaJjoaFFaSqGeXVAUAEFUQQu8P33pj1Xzu9s7/vi5zwPIpFIJBKJRCKRSCQSiUQikUBNSD5X/v4n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');

});