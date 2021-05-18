var app = new Vue (
    {
        el:"#root",
        data: {
            images:[
                "https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg",
                "https://www.globalgeografia.com/europa/immagini/fr_parigi.jpg",
                "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/9c/36/5d.jpg",
                "https://www.doitviaggi.com/wp-content/uploads/2019/05/Capodanno-New-York-2019-20-1.jpg",
                "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2020/03/weekend-roma-segreta-1080x720.jpg?v=372421",
                "https://www.viaggioinrussia.it/public/1140w/1573300755-guida-mosca.jpg",
                "http://www.loveamsterdam.it/wp-content/uploads/2019/09/casas-barco-amsterdam.jpg",
            ],
            indexImage: 0,
        },
        methods: {
            nextImage: function (){
                this.indexImage ++;
                if(this.indexImage == this.images.length){
                    this.indexImage = 0;
                }
            },
            prevImage: function(){
                this.indexImage --;
                if(this.indexImage == -1){
                    this.indexImage = this.images.length -1;
                }
            }
        },
        created: function(){
            setInterval(this.nextImage, 3000);
        }
});