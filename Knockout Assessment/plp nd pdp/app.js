
function AppViewModel() {
  var self = this;
  self.selectedProductDetails = ko.observable([]);
  self.hasBeenSubmitted = ko.observable(false);
  self.priceLowBound = ko.observable(0);
  self.priceHighBound = ko.observable(100000);
  self.sortMethod = ko.observable("asc");
  self.minimum = ko.observable(1);
  self.maximum = ko.observable(20);
  self.results = ko.observableArray([]);
  self.selectToy = function (data) {
    self.selectedProductDetails([{ ...data }]);
    self.hasBeenSubmitted(true);
  };

  self.goBack = function () {
    self.hasBeenSubmitted(false);
  };

  self.filterPrice = function () {
    var priceDOM = document.getElementById("priceDropDown");
    var price = priceDOM.value.split("-");
    self.priceLowBound(price[0]);
    self.priceHighBound(price[1]);
  };

  self.sortWithPrice = function () {
    var sortDOM = document.getElementById("sortDropDown");
    self.sortMethod(sortDOM.value);
  };

  self.masterProducts = ko.observable([
    {
      toyName: "SCOOTER",
      price: 550,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
     
      imagePLP:"toys/img1.jpeg"
    },
    {
      toyName: "ABACUS",
      price: 200,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img2.jpeg"
      },
    {
      toyName: "ROBOT",
      price: 5000,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img3.jpeg"

      },
    {
      toyName: "BALL",
      price: 1800,
    
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img4.jpeg"

      },
    {
      toyName: "DOLL",
      price: 2500,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img5.jpeg"

      },
    {
      toyName: "RING",
      price: 600,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img6.jpeg"
      },
    {
      toyName: "UNICORN",
      price: 2500,
      
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img7.jpeg"

    },
  {
    toyName: "TOY HOUSE",
    price: 10000,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img8.jpeg"
    },
  {
    toyName: "HANDY TOYS",
    price: 5000,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img9.jpeg"
    },
  {
    toyName: "TEDDY BEAR",
    price: 2800,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
       imagePLP:"toys/img10.jpeg"
    },
  {
    toyName: "HELICOPTER",
    price: 550,
  
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img11.jpeg"
    },
  {
    toyName: "PINK UNICORN",
    price: 2800,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
    
      imagePLP:"toys/img12.jpeg"
  },
  {
    toyName: "LION KING",
    price: 3000,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img13.jpeg"
    },
  {
    toyName: "MARVEL TOY",
    price: 4500,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      imagePLP:"toys/img14.jpeg"
    },
  {
    toyName: "HULK",
    price: 580,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img15.jpeg"
    },
  {
    toyName: "REMOTE CONTROL CAR",
    price: 1200,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img16.jpeg"
    },
  {
    toyName: "MR.POTATOE HEAD",
    price: 670,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
    
      imagePLP:"toys/img17.png"
    },
  {
    toyName: "BULLDOZER",
    price: 1400,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
     
      imagePLP:"toys/img18.jpeg"

    },
  {
    toyName: "SPRING TOY",
    price: 1900,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img19.webp"

    },
  {
    toyName: "TELEPHONE",
    price: 2350,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img20.jpg"
    },
  ]);

  // list of available products
  self.availableProducts = ko.observableArray([
    {
      toyName: "SCOOTER",
      price: 550,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
     
      imagePLP:"toys/img1.jpeg"
    },
    {
      toyName: "ABACUS",
      price: 200,
      
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img2.jpeg"
      },
    {
      toyName: "ROBOT",
      price: 5000,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img3.jpeg"

      },
    {
      toyName: "BALL",
      price: 1800,
      
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img4.jpeg"

      },
    {
      toyName: "DOLL",
      price: 2500,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img5.jpeg"

      },
    {
      toyName: "RING",
      price: 600,
      
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
        
        imagePLP:"toys/img6.jpeg"
      },
    {
      toyName: "UNICORN",
      price: 2500,
     
      category: "TOYS",
      description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img7.jpeg"

    },
  {
    toyName: "TOY HOUSE",
    price: 10000,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img8.jpeg"
    },
  {
    toyName: "HANDY TOYS",
    price: 5000,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img9.jpeg"
    },
  {
    toyName: "TEDDY BEAR",
    price: 2800,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
       imagePLP:"toys/img10.jpeg"
    },
  {
    toyName: "HELICOPTER",
    price: 550,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img11.jpeg"
    },
  {
    toyName: "PINK UNICORN",
    price: 2800,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
    
      imagePLP:"toys/img12.jpeg"
  },
  {
    toyName: "LION KING",
    price: 3000,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img13.jpeg"
    },
  {
    toyName: "MARVEL TOY",
    price: 4500,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      imagePLP:"toys/img14.jpeg"
    },
  {
    toyName: "HULK",
    price: 580,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img15.jpeg"
    },
  {
    toyName: "REMOTE CONTROL CAR",
    price: 1200,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img16.jpeg"
    },
  {
    toyName: "MR.POTATOE HEAD",
    price: 670,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
    
      imagePLP:"toys/img17.png"
    },
  {
    toyName: "BULLDOZER",
    price: 1400,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
     
      imagePLP:"toys/img18.jpeg"

    },
  {
    toyName: "SPRING TOY",
    price: 1900,
   
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img19.webp"

    },
  {
    toyName: "TELEPHONE",
    price: 2350,
    
    category: "TOYS",
    description:
    "Made of environment friendly plastic with smooth surface and curves, adorable and real, every kid likes pretend game, pretend a different family role, start to play games with your baby;Enjoy fun and happiness of the pretend play game , developing child's mind, practical ability, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operationIdeal toys for kids' early development, bright and various colors draw babies' attention and improve kids' color cognition ability. Recommended for kids age 3 years and up;100% non-toxic ,Eco friendly materials, No Sharp Edges",
      
      imagePLP:"toys/img20.jpg"
    },
  ]);

  


  self.pageNumber = ko.observable(0);
  self.productsPerPage = 4;
  self.totalPages = ko.computed(function () {
    var div = Math.floor(self.masterProducts().length / self.productsPerPage);
    div += self.masterProducts().length % self.productsPerPage > 0 ? 1 : 0;
    return div;
  });

  self.totalPagesArray = ko.observable([]);
  for (let i = 1; i <= self.totalPages(); i++) {
    self.totalPagesArray([...self.totalPagesArray(), i]);
  }

  self.selectPage = function (data) {
    self.pageNumber(data - 1);
  };

  self.availableProducts = ko.computed(function () {
    const predicate1 =
      (low, high) =>
      ({ price }) =>
        price >= low && price <= high;

    var first = self.pageNumber() * self.productsPerPage;
    let paginatedItems = self
      .masterProducts()
      .slice(first, first + self.productsPerPage);
    let paginatedFilteredItems = paginatedItems.filter(
      predicate1(self.priceLowBound(), self.priceHighBound())
    );

    return _.orderBy(paginatedFilteredItems, "price", self.sortMethod());
  });

  self.next = function () {
    if (self.pageNumber() < self.totalPages() - 1) {
      self.pageNumber(self.pageNumber() + 1);
    }
  };

  self.previous = function () {
    if (self.pageNumber() != 0) {
      self.pageNumber(self.pageNumber() - 1);
    }
  };
  
  
  self.getRandomInt = function () {
    var max = self.maximum();
    var min = self.minimum();
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    self.results.push({val: num});

    return num;
};
}

ko.applyBindings(new AppViewModel());

    