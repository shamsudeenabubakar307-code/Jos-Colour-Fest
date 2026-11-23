export const PROGRAMMES = [
  { title: 'Jos Kiddies Boutique', tag: 'Workshop', color: '#1d1f6e', text: 'Tie, fold and dip your own indigo cloth, guided by dyers from Jos.' },
  { title: 'By M.I Abaga And Ice Prince', tag: 'Music', color: '#d6006f', text: 'Three live bands across two nights on the main stage.' },
  { title: 'Patience Andrew (AP)', tag: 'Spoken word', color: '#0a9b62', text: 'Twelve poets, three minutes each, one panel of judges.' },
  { title: 'SIM One Fashion Jos', tag: 'Fashion', color: '#f26a1b', text: 'Tailors from Balogun present original collections.' },
  { title: 'Street food run', tag: 'Food', color: '#0aa5b5', text: 'Thirty vendors serving suya, akara, boli and puff-puff.' },
  { title: 'Ecstasy art parade', tag: 'Art', color: '#e0a000', text: 'Hand-painted buses and murals roll through the park.' },
]

export const SCHEDULE = {
  Friday: [
    ['4:00 pm', ' Jos Kiddies Boutique', 'Workshop'],
    ['6:30 pm', 'Patience Andrew (AP)', 'Spoken word'],
    ['9:00 pm', 'By M.I Abaga And Ice Prince', 'Music'],
  ],
  Saturday: [
    ['11:00 am', 'Ecstasy art parade', 'Art'],
    ['2:00 pm', 'Street food run', 'Food'],
    ['7:00 pm', 'SIM One Fashion Jos', 'Fashion'],
    ['10:00 pm', 'By M.I Abaga And Ice Prince', 'Music'],
  ],
  Sunday: [
    ['12:00 pm', 'Family colour fight with powder paint', 'Family'],
    ['3:00 pm', 'Market of makers', 'Market'],
    ['6:00 pm', 'Closing parade', 'Art'],
  ],
}

export const TICKETS = [
  { name: 'Day pass', price: '₦3,000', features: ['Entry for one day', 'Free for children under 10', 'Access to all stages'] },
  { name: 'Full festival', price: '₦5,000', featured: true, features: ['Entry for all three days', 'Adire dye kit to take home', 'Priority queue at food court'] },
  { name: 'Group of five', price: '₦15,000', features: ['Five full festival passes', 'Reserved picnic area', 'Group check-in lane'] },
]

export const FAQ = [
  ['Where is the festival?', 'Mees Palace, Eliel Centre. The park is a short ride from Broad Street and has parking on site.'],
  ['Can children attend?', 'Yes. Children under 10 enter free with an adult, and Sunday is planned for families.'],
  ['What is the refund policy?', 'Tickets can be refunded up to 14 days before the festival. After that you can transfer them to someone else.'],
  ['Is the venue accessible?', 'All stages and the food court are step-free, with accessible toilets and a quiet area near the main entrance.'],
]

export const STATS = [['3', 'days'], ['6', 'programmes'], ['40+', 'makers and vendors'], ['4', 'live bands']]

export const NAV_LINKS = [
  ['Programme', '#programme'],
  ['Schedule', '#schedule'],
  ['Tickets', '#tickets'],
  ['FAQ', '#faq'],
]
