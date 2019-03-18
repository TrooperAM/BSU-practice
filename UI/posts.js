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

class PostCollection{
   constructor(photoPosts){
      this._photoPosts=photoPosts||[];
   }
   static _validateHelper={
    id: function(id){
        if(!!id && typeof(id)==='string' && !(/[^0-9]/.test(id))){
        return true;
       } else{
            return false;
       }
    },
    descriprion: function(descriprion){
        if(!!descriprion && descriprion.length<=200){
            return true;
        } else{
            return false;
        }
    },
   createdAt: function(createdAt){
       if(!!createdAt && createdAt instanceof Date){
           return true;
       } else {
           return false;
       }
   }, 
   author: function(author){
       if(!!author && typeof(author)==='string'){
           return true;
       } else {
           return false;
       }
   },
   photoLink: function(photoLink){
       if(!!photoLink && typeof(photoLink)==='string'){
           return true;
       } else {
           return false;
       }
   },
   hashTags: function(hastags){
       return true;
    },
   likes: function(likes){
       return true;
    }
}
   getPage(skip=0,top=10,filterConfig={}){
    let _filterHelper={
        author: function(list,author){
           return list.filter(function(item){
                return item.author===author;
            });
        },
        from: function(list,from){
            return list.filter(function(item){
                return item.createdAt>=from;
            });
        },
        to: function(list,to){
            return list.filter(function(item){
                return item.createdAt<=to;
            });
        },
        hashTags: function(list,hashTags){
            return list.filter(function(item){
             return item.hashTags.some(tag => hashTags.indexOf(tag)>=0);
            });
        }
       }
    var sortedPosts=this._photoPosts.slice(0);
        Object.keys(filterConfig).forEach(function(field){
           return sortedPosts=_filterHelper[field](sortedPosts,filterConfig[field]);
        });
        sortedPosts.sort(function compareDates(a,b){
            return a.createdAt-b.createdAt;
        });
        sortedPosts.splice(0,skip);
        sortedPosts.splice(top,sortedPosts.length);
       return sortedPosts;
   }
   static validate(post) 
   { 
      let isValid = true;
      let tmp={id:'11111',author:'test',descriprion:'test',photoLink:'test',createdAt: new Date(),likes:[],hashTags:[]}; 
      var arr=Object.keys(post)
      for(let i=0;i<arr.length;i++){
          if(!tmp.hasOwnProperty(arr[i])){
              return false;
          }
      }
      Object.keys(post).forEach(function(elem) {
      if(!PostCollection._validateHelper[elem](post[elem])) {  
        isValid = false;
    }}); 
        return isValid; 
}
   getPost(id){
    var post=this._photoPosts.find(function(item){
        return item.id===(id);
    });
    return post || false;
   }
   addPost(photoPost){
    if(PostCollection.validate(photoPost)&& !this._photoPosts.some(item => item.id===photoPost.id)){
        photoPost.likes=[];
        this._photoPosts.push(photoPost);
        return true;
    } else {
        return false;
    }
   }
   editPost(id,photoPost){
    let post=Object.assign({},this._photoPosts.find(function(item){
        return item.id==id;
    }));
    let pos=this._photoPosts.findIndex(function(item){
        return item.id===id;
        });
    console.log(Object.keys(post));
        if(photoPost.descriprion!==null){
            post.descriprion=photoPost.descriprion;
        }
        if(photoPost.photoLink!==null){
            post.photoLink=photoPost.photoLink;
        }
        console.log(Object.keys(post));
        if(PostCollection.validate(post)){
           this. _photoPosts.splice(pos,1,post);
        return true;
        } else return false;   
   }
   removePost(id){
    let pos=this._photoPosts.findIndex(function(item){
     return item.id===id;
     });
     if(pos>=0){
     this._photoPosts.splice(pos,1);
     return true;
    } else return false;
   }
   addAll(posts){
       posts.forEach(item => this.addPost(item));
   }
   clear(){
       this._photoPosts.splice(0,this._photoPosts.length);
   }
}

var I = new PostCollection(photoPosts);
console.log(PostCollection.validate({descriprion:"zxcvasdf" ,photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg'}));
console.log(I.getPage(10, 10));
console.log(I.getPage(0, 10, {author: 'Чумак Христина'}));
console.log(I.getPost('27'));
console.log(I.removePost('28'));
console.log(I);
console.log(I.addPost({id:'1',author:'fghj',descriprion:'rtyu',photoLink:'fghj',createdAt: new Date()}));//false
console.log(I.addPost({id:'666',author:'fghj',descriprion:'rtyu',photoLink:'fghj',createdAt: new Date()}));//true
console.log(I.editPost('1', {descriprion:"zxcvasdf" ,photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg' }));
console.log(I);
console.log(I.addAll([{id:'666',author:'fghj',descriprion:'rtyu',photoLink:'fghj',createdAt: new Date()},{id:'668',author:'fghj',descriprion:'rtyu',photoLink:'fghj',createdAt: new Date()},
{id:'669',author:'fghj',descriprion:'rtyu',photoLink:'fghj',createdAt: new Date()}]));
console.log(I);
console.log(I.removePost('12'));
console.log(I);
