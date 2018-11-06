import { Book } from '../models/Book';
import { Cd } from '../models/Cd';

export class MediasService {
    booksList: Book[] = [
        {
            titre: 'Livre 01',
            auteur: 'Auteur 01',
            description: [
                'nbPage: 175',
                'ISBN: 132456-789'
            ],
            isOut: false
        },
        {
          titre: 'Livre 02',
          auteur: 'Auteur 02',
          description: [
            'nbPage: 99',
            'ISBN: 132456-789'
        ],
        isOut: false
        },
        {
          titre: 'Livre 03',
          auteur: 'Auteur 01',
          description: [
            'nbPage: 200',
            'ISBN: 132456-789'
        ],
        isOut: true
      },
  
    ];

    cdsList: Cd[] = [
        {
            titre: 'Album 01',
            artiste: 'Artiste 01',
            description: [
                'durée : 66 min',
                'nbTracks : 10'
            ],
            isOut: false
        },
        {
            titre: 'Album 02',
            artiste: 'Artiste 02',
            description: [
                'durée : 100 min',
                'nbTracks : 15'
            ],
            isOut: true
        },
        {
            titre: 'Album 03',
            artiste: 'Artiste 01',
            description: [
                'durée : 77 min',
                'nbTracks : 11'
            ],
            isOut: false
        },
    ];

  }
  