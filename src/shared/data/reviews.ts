export interface Review {
    name: string;
    emojiUrl: string;
    text: string;
  }
  
  export const reviews: Review[] = [
    {
      name: 'Josh',
      emojiUrl: '/images/icon-heart.png',
      text: 'Photo AI is just fantastic! I take amazing photos of my wife, family and friends. As a photographer I use it to test ideas before creating a real photoshoot. I strongly recommend!',
    },
    {
      name: 'Viki',
      emojiUrl: '/images/icon-cool.png',
      text: 'Cool AI tool for image generation! I could create a lot of truly amazing pictures in different locations with different outfits! All my friends were surprised and loved my pictures!',
    },
    {
      name: 'Andrei',
      emojiUrl: '/images/icon-smile.png',
      text: 'Good input = good output. Very fun! Took me some effort to get the models to feel accurate but once I got the right input it was amazing. Photo AI was very responsive to my questions.',
    },
  ];
  