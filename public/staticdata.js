'use strict';

const RESTAURANTS = {
  'businesses': [
    {
      'id': 'ZOZ94_vjuogm6PzmuIa1FQ',
      'alias': 'viet-orleans-bistro-new-orleans-2',
      'name': 'Viet Orleans Bistro',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/CNikf90XrWFEA5X_G5d2_g/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/viet-orleans-bistro-new-orleans-2?adjust_creative=zliweyPQCQtyJE4C4LmkCA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zliweyPQCQtyJE4C4LmkCA',
      'review_count': 114,
      'categories': [
        {
          'alias': 'vietnamese',
          'title': 'Vietnamese'
        },
        {
          'alias': 'sushi',
          'title': 'Sushi Bars'
        },
        {
          'alias': 'seafood',
          'title': 'Seafood'
        }
      ],
      'rating': 4,
      'coordinates': {
        'latitude': 29.952161,
        'longitude': -90.072301
      },
      'transactions': [],
      'price': '$$',
      'location': {
        'address1': '300 Baronne St',
        'address2': '',
        'address3': '',
        'city': 'New Orleans',
        'zip_code': '70112',
        'country': 'US',
        'state': 'LA',
        'display_address': [
          '300 Baronne St',
          'New Orleans, LA 70112'
        ]
      },
      'phone': '+15043336917',
      'display_phone': '(504) 333-6917',
      'distance': 947.3913285097972
    },
    {
      'id': 'qq6vsh6ZEshfv4mTdrjA0g',
      'alias': 'magasin-kitchen-new-orleans',
      'name': 'Magasin Kitchen',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/xN9W0ods4SZXT2wVE7qaWw/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/magasin-kitchen-new-orleans?adjust_creative=zliweyPQCQtyJE4C4LmkCA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zliweyPQCQtyJE4C4LmkCA',
      'review_count': 60,
      'categories': [
        {
          'alias': 'vietnamese',
          'title': 'Vietnamese'
        }
      ],
      'rating': 4,
      'coordinates': {
        'latitude': 29.9483139795614,
        'longitude': -90.0752910748688
      },
      'transactions': [],
      'price': '$$',
      'location': {
        'address1': '611 Okeefe Ave',
        'address2': '',
        'address3': '',
        'city': 'New Orleans',
        'zip_code': '70130',
        'country': 'US',
        'state': 'LA',
        'display_address': [
          '611 Okeefe Ave',
          'New Orleans, LA 70130'
        ]
      },
      'phone': '+15045715677',
      'display_phone': '(504) 571-5677',
      'distance': 680.4187067127796
    },
    {
      'id': '43cADIQXfG3hDwuvLT78rg',
      'alias': 'st-charles-noodle-new-orleans',
      'name': 'St. Charles Noodle',
      'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/dsCDiwjczo8keM3sdUl01Q/o.jpg',
      'is_closed': false,
      'url': 'https://www.yelp.com/biz/st-charles-noodle-new-orleans?adjust_creative=zliweyPQCQtyJE4C4LmkCA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zliweyPQCQtyJE4C4LmkCA',
      'review_count': 15,
      'categories': [
        {
          'alias': 'vietnamese',
          'title': 'Vietnamese'
        },
        {
          'alias': 'noodles',
          'title': 'Noodles'
        },
        {
          'alias': 'salad',
          'title': 'Salad'
        }
      ],
      'rating': 4,
      'coordinates': {
        'latitude': 29.9517246,
        'longitude': -90.0704988
      },
      'transactions': [],
      'price': '$',
      'location': {
        'address1': '201 St Charles Ave',
        'address2': 'Ste 214',
        'address3': '',
        'city': 'New Orleans',
        'zip_code': '70170',
        'country': 'US',
        'state': 'LA',
        'display_address': [
          '201 St Charles Ave',
          'Ste 214',
          'New Orleans, LA 70170'
        ]
      },
      'phone': '+15042873546',
      'display_phone': '(504) 287-3546',
      'distance': 883.7884979035963
    }
  ],
  'total': 3,
  'region': {
    'center': {
      'longitude': -90.07055282592773,
      'latitude': 29.943776628130635
    }
  }
};

//restaurantType to cuisineType
//restaurantOptions to pollOptions


const POLLS = {
  'restaurantPolls': [
    {
      'id': '1111111',
      'restaurantType': 'BBQ',
      'restaurantOptions': [
        { 'name': 'Bubbah BBQ',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 1,
        },
        { 'name': 'Mesquite Pete',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 0,
        },
        { 'name': 'Mesquite Pete',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 3,
        }
      ],
    },

    {
      'id': '2222222',
      'restaurantType': 'Chinese',
      'restaurantOptions': [
        { 'name': 'China Wall',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 2,
        },
        { 'name': 'Hunan House',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 1,
        },
        { 'name': 'Dim Sum Garden',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 0,
        }
      ],
    },

    {
      'id': '3333333',
      'restaurantType': 'Japanese',
      'restaurantOptions': [
        { 'name': 'Sushi Brothers',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 3,
        },
        { 'name': 'Teriyaki Hut',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 1,
        },
        { 'name': 'Hokkaido Grill',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 2,
        }
      ],
    },

    {
      'id': '4444444',
      'restaurantType': 'Chicken',
      'restaurantOptions': [
        { 'name': 'Chik-Fil-A',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 1,
        },
        { 'name': 'Churchs Chicken',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 1,
        },
        { 'name': 'Popeyes',
          'yelpUrl': 'yelpurl.com',
          'voteScore': 0,
        }
      ],
    },

  ]
};