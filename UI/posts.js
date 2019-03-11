;(function(){
var photoPosts = [
    {
    id: '1',
    descriprion: 'Фотогеничность ребенка. Уровень: Бог',
    createdAt: new Date('2018-01-23T22:00:00'),
    author: 'Петров Иван',
    hashTags:['#wwww','#maz','#sas'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина '],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/preview-23858515-650x341-98-1484579537.jpg'
     },
     {
    id: '2',
    descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Иванов Иван',
    hashTags:['#china','#biathlon','#belarus'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван'],
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
     },
     {id: '3',
    descriprion: 'Семья Шрека и Фионы',
    createdAt: new Date('2018-06-23T21:00:00'),
    author: 'Сидоров Иван',
    hashTags:['#aaaa','#bbbb','#qweccccccc'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11655010-Unknown-7-650-337aa07424-1484579537.jpg'
     },
     {id: '4',
    descriprion: 'Охрана',
    createdAt: new Date('2018-04-26T20:00:00'),
    author: 'Тарасюк Устин ',
    hashTags:['#F'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Быков Ждан '],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11654860-Unknown-10-650-1cb1a7f282-1484579537.jpg'
     },
     {id: '5',
    descriprion: 'Так выглядит ведро лени',
    createdAt: new Date('2018-12-12T19:00:00'),
    author: 'Быков Ждан ',
    hashTags:['#asdf','#qwer','#zxcv','#sdfasd','#iyjykoj','#sffff'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11655060-Unknown-8-650-dc123aea1a-1484579537.jpg'
     },
     {id: '6',
    descriprion: 'Ночной Амстердам',
    createdAt: new Date('2018-11-11T18:00:00'),
    author: 'Посидайло Руслан ',
    hashTags:['#asdfqwerzxcv'],
    likes:['Анисимов Леон' ,'Посидайло Руслан ','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11653110-Unknown-2-650-56828c05fc-1484579537.jpg'
     },
     {id: '7',
    descriprion: 'Обед!',
    createdAt: new Date('2018-10-10T17:00:00'),
    author: 'Анисимов Леон ',
    hashTags:['#asdfzxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11653760-7422560-R3L8T8D-650-47-650-f8dfc2c8fd-1484579537.jpg'
     },
     {id: '8',
    descriprion: 'Нежность',
    createdAt: new Date('2018-09-09T16:00:00'),
    author: 'Виноградов Богдан ',
    hashTags:['#asdf','#qwerzxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11653660-Unknown-4-650-92995e3597-1484579537.jpg'
     },
     {id: '9',
    descriprion: 'Тем временем в Норвегии',
    createdAt: new Date('2018-08-08T15:00:00'),
    author: 'Савельев Эдуард ',
    hashTags:['#asdfqwer','#zxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11653810-Unknown-650-11d21d25cb-1484579537.jpg'
     },
     {id: '10',
    descriprion: 'Йогурт, персик и яблоко',
    createdAt: new Date('2018-02-22T14:00:00'),
    author: 'Каськив Юлиан ',
    hashTags:['#sdasdas','#yhnmj'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11653560-9380560-R3L8T8D-650-47-650-c631ca9938-1484579537.jpg'
     },
     {id: '11',
    descriprion: 'Осень в деревне',
    createdAt: new Date('2018-02-13T05:00:00'),
    author: 'Гриневская Марк',
    hashTags:['#zxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11652660-Unknown-1-650-b9fff6dadc-1484579537.jpg'
     },
     {id: '12',
    descriprion: 'К празднику готов!',
    createdAt: new Date('2018-10-30T12:00:00'),
    author: 'Палий Казбек ',
    hashTags:['#asdf'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11655710-KHellouin_fun-650-93a0ce40b8-1484579537.jpg'
     },
     {id: '13',
    descriprion: 'Вождь хитромордых',
    createdAt: new Date('2018-04-27T20:56:00'),
    author: 'Иващенко Филипп',
    hashTags:['#vfre','#asdf','#qwer','#zxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11652560-Unknown-3-650-700dcdca4b-1484579537.jpg'
     },
     {id: '14',
     descriprion: 'Лужа в Национальном парке Geysir в Исландии!',
     createdAt: new Date('2018-08-13T21:00:43'),
     author: 'Евсеев Харитон ',
     hashTags:['#asdf','#qwer','#rtyu'],
     likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
     photoLink: 'https://files.adme.ru/files/news/part_82/823460/11654360-6553660-R3L8T8D-650-p2732-650-1545b52e09-1484579537.jpg'
      },
      {id: '15',
    descriprion: 'Ночной Петербург',
    createdAt: new Date('2018-06-21T15:22:00'),
    author: 'Таранец Элоиза',
    hashTags:['#asdf'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11652160-11230010-R3L8T8D-1000-1415346940-fc5f8fbbeee79c86644b72dc361f3533-650-20b7f2436e-1484579537.jpg'
     },
     {id: '16',
    descriprion: 'Так, а кому котика?',
    createdAt: new Date('2018-07-27T16:01:00'),
    author: 'Иващенко Дарья ',
    hashTags:['#asdf','#zxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11656360-6955860-R3L8T8D-650-1396446260_06-650-43a3c5c406-1484579537.jpg'
     },
     {id: '17',
    descriprion: 'Львы под дождем, Танзания',
    createdAt: new Date('2018-10-24T14:03:25'),
    author: 'Русакова Белла ',
    hashTags:['#asdf','#qwer','#zxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван'],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11654760-Unknown-5-650-e098aaf129-1484579537.jpg'
     },
     {id: '18',
    descriprion: 'Сбой в матрице',
    createdAt: new Date('2018-05-17T12:54:44'),
    author: 'Пархоменко Нина ',
    hashTags:['#asdf','#qwer','#zxcv','#ertert'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина ','Петров Иван','Сидоров Иван','Русакова Белла '],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11654960-Unknown-11-650-a9490a6e96-1484579537.jpg'
     },
     {id: '19',
    descriprion: 'Селфи во время авиакатастрофы',
    createdAt: new Date('2018-03-25T23:00:00'),
    author: 'Права Ева ',
    hashTags:['#asdf','#qwer'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина '],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11656160-6957160-R3L8T8D-650-39-297-650-34d226e0f9-1484579537.jpg'
     },
     {id: '20',
    descriprion: 'Капля морской воды, увеличенная в 25 раз',
    createdAt: new Date('2018-01-29T10:00:00'),
    author: 'Чумак Христина',
    hashTags:['#asdf','#qwer','#zxcv'],
    likes:['Чумак Христина','Права Ева ','Пархоменко Нина '],
    photoLink: 'https://files.adme.ru/files/news/part_82/823460/11656310-6952560-R3L8T8D-650-114-44-650-74abb3f7e3-1484579537.jpg'
     },];
    function validatePhotoPost(photoPost){
        if(photoPosts.some(function(item){
            return item.id==photoPost.id;
        })){
            return false;
        }
        if(photoPost.id!=null && photoPost.descriprion!=null && photoPost.createdAt!=null && photoPost.author!=null && photoPost.photoLink!=null){
            return true;
        }else return false;
    }
    function addPhotoPost(photoPost){
       if(validatePhotoPost(photoPost)){
           photoPost.likes={};
           photoPosts.push(photoPost);
           return true;
       } else {
           return false;
       }
    }
    function getPhotoPost(id){
        var post;
        for( i=0;i<photoPosts.length;i++){
            if(photoPosts[i].id==parseInt(id)){
                post=photoPosts[i];
            }
        }
        if(post!=null){
        return post;
        } else{
            return false;
        }
    }
    function removePhotoPost(id){
        for( i=0;i<photoPosts.length;i++){
            if(photoPosts[i].id===id){
                photoPosts.splice(i,1);
                return true;
            }
        }
        return false;
    }
    function editPhotoPost(id,photoPost){
        
        for( i=0;i<photoPosts.length;i++){
            if(photoPosts[i].id==parseInt(id)){
              if(photoPost.descriprion!=null){
                photoPosts[i].descriprion=photoPost.descriprion;
            }
            if(photoPost.photoLink!=null){
                photoPosts[i].photoLink=photoPost.photoLink;
                photoPosts[i].likes={};
            }
            if(validatePhotoPost(photoPosts[i])){
            return true;
            } else return false;
            }
        }
        return false;
    }
    function getPhotoPosts(filterConfig,skip=0,top=10){
        var sortedPosts=photoPosts.slice(0);
        if(filterConfig.author!=null){
            sortedPosts=sortedPosts.filter(function(item){
                return item.author===filterConfig.author;
             });
        }
        if(filterConfig.from!=null){
            sortedPosts=sortedPosts.filter(function(item){
                return item.createdAt>=filterConfig.from;
             });
        }
        if(filterConfig.to!=null){
            sortedPosts=sortedPosts.filter(function(item){
                return item.createdAt<=filterConfig.to;
             });
        }
        if(filterConfig.hashTags!=null){
            sortedPosts=sortedPosts.filter(function(item){
                if(item.hashTags.some(r => filterConfig.hashTags.indexOf(r)>=0))
                {return true;}
                return false; 
            });
        }
        sortedPosts.sort(function compareDates(a,b){
            return a.createdAt-b.createdAt;
        });
        sortedPosts.splice(0,skip);
        sortedPosts.splice(top,sortedPosts.length);
       return sortedPosts;
    }   
    function like(user,post){
        if(post.likes.indexOf(user)!=-1){
            post.likes.splice(post.likes.indexOf(user),1);
        } else post.likes.push(user);
    }
}());