import { reactive } from "vue"

export const store = reactive({
    selected: {
        section: 0,
        exhibition: 0,
        artist: 0
    },
    apiUrl: 'http://127.0.0.1:8000/api/memorial-gestures',
    apiBase: 'http://127.0.0.1:8000/',
    infos:[],
    dataReady: false

    // sections: [
    //     {
    //         section_id:0,
    //         name: "Podcast",
    //         list: [
    //             {
    //                 title:"01 -> text",
    //                 list_id:0
    //             },
    //             {
    //                 title:"02 -> text",
    //                 list_id:1
    //             },
    //             {
    //                 title:"03 -> text",
    //                 list_id:2
    //             }

    //         ]
    //     },
    //     {
    //         section_id:1,
    //         name: "Exibition",
    //         list: [
    //             {
    //                 list_id:0,
    //                 title: "12 - 23 August 2023",
    //             },
    //             {
    //                 list_id:1,
    //                 title: "23 - 30 August 2024"
    //             }
    //         ]
    //     },
    //     {
    //         section_id:2,
    //         name: "Publishing",
    //         list: [
    //             {
    //                 title: "Title 01",
    //                 list_id: 0
    //             },
    //             {
    //                 title: "Title 02",
    //                 list_id: 1
    //             },
    //             {
    //                 title: "Title 03",
    //                 list_id: 2
    //             }
    //         ]
    //     },
    //     {
    //         section_id:3,
    //         name: "Memorial Gestures",
    //         list: [
    //             {
    //                 title: "2020",
    //                 list_id: 0
    //             },
    //             {
    //                 title: "2021",
    //                 list_id: 1
    //             },
    //             {
    //                 title: "2022",
    //                 list_id: 2
    //             },
    //             {
    //                 title: "2023",
    //                 list_id: 3
    //             },
    //         ]
    //     }
    // ],
    // fakeData: [
    //     // Podcasts
    //     [
    //         {
    //             topRImage: "https://picsum.photos/seed/1008/682/682",
    //             topLImage: "https://picsum.photos/seed/2000/682/682",
    //             title: "First Podcast",
    //             artist: "Great Artist",
    //             year: 2001,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/100/682/682",
    //             topLImage: "https://picsum.photos/seed/200/682/682",
    //             title: "Second Podcast",
    //             artist: "Another Great Artist",
    //             year: 1998,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?",
    //             botRImage: "https://picsum.photos/seed/500/682/682",
    //             botLImage: "https://picsum.photos/seed/600/682/682",
    //             secondDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1001/682/682",
    //             topLImage: "https://picsum.photos/seed/2002/682/682",
    //             title: "Third Podcast",
    //             artist: "Great Artist",
    //             year: 2001,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?"
    //         },
    //     ],
    //     // Exibitions
    //     [
    //         {
    //             topRImage: "https://picsum.photos/seed/1050/682/682",
    //             topLImage: "https://picsum.photos/seed/2050/682/682",
    //             title: "First Exibition",
    //             artist: "Great Artist",
    //             year: 2001,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?",
    //             botRImage: "https://picsum.photos/seed/700/682/682",
    //             botLImage: "https://picsum.photos/seed/800/682/682",
    //             secondDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1009/682/682",
    //             topLImage: "https://picsum.photos/seed/2008/682/682",
    //             title: "Second Exibition",
    //             artist: "Another Great Artist",
    //             year: 1998,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?"
    //         },
            
    //     ],
    //     // Publishings
    //     [
    //         {
    //             topRImage: "https://picsum.photos/seed/1800/682/682",
    //             topLImage: "https://picsum.photos/seed/2800/682/682",
    //             title: "First Publishing",
    //             artist: "Great Artist",
    //             year: 2001,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?",
    //             botRImage: "https://picsum.photos/seed/900/682/682",
    //             botLImage: "https://picsum.photos/seed/950/682/682",
    //             secondDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1850/682/682",
    //             topLImage: "https://picsum.photos/seed/2850/682/682",
    //             title: "Second Publishing",
    //             artist: "Another Great Artist",
    //             year: 1998,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1551/682/682",
    //             topLImage: "https://picsum.photos/seed/2552/682/682",
    //             title: "Third Publishing",
    //             artist: "Great Artist",
    //             year: 2001,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?",
    //             botRImage: "https://picsum.photos/seed/1111/682/682",
    //             botLImage: "https://picsum.photos/seed/2222/682/682",
    //             secondDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum?"
    //         },
    //     ],
    //     // Memorial Gestures
    //     [
    //         {
    //             topRImage: "https://picsum.photos/seed/1789/682/682",
    //             topLImage: "https://picsum.photos/seed/2789/682/682",
    //             title: "First Memorial Gestures",
    //             artist: "Great Artist",
    //             year: 2020,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1987/682/682",
    //             topLImage: "https://picsum.photos/seed/2987/682/682",
    //             title: "Second Memorial Gestures",
    //             artist: "Another Great Artist",
    //             year: 2021,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?",
    //             botRImage: "https://picsum.photos/seed/1357/682/682",
    //             botLImage: "https://picsum.photos/seed/2468/682/682",
    //             secondDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1123/682/682",
    //             topLImage: "https://picsum.photos/seed/2123/682/682",
    //             title: "Third Memorial Gestures",
    //             artist: "Great Artist",
    //             year: 2022,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?"
    //         },
    //         {
    //             topRImage: "https://picsum.photos/seed/1456/682/682",
    //             topLImage: "https://picsum.photos/seed/2456/682/682",
    //             title: "Fourth Memorial Gestures",
    //             artist: "Great Artist",
    //             year: 2023,
    //             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum? Tenetur praesentium, maxime error tempore esse dicta repudiandae unde nisi eveniet hic, vero, modi corrupti quidem. Quam sequi est eligendi expedita odio excepturi tempora consequuntur quasi accusamus perspiciatis modi aspernatur, commodi numquam laborum sapiente sint. Enim dolor dolore aperiam necessitatibus quasi consequatur eligendi assumenda minima numquam repellendus tempora unde suscipit incidunt sunt, dolorem aliquid eveniet magnam. Magnam eligendi amet, ipsum nostrum a tempora ullam expedita officiis ratione qui incidunt accusamus voluptatem odio molestias ea reiciendis sunt provident et quibusdam error adipisci vel. Ex asperiores cupiditate vitae voluptates quidem temporibus, voluptatum amet nulla porro libero, quam quas itaque dolorum! Quos, explicabo?",
    //             botRImage: "https://picsum.photos/seed/2233/682/682",
    //             botLImage: "https://picsum.photos/seed/1133/682/682",
    //             secondDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat exercitationem maxime earum adipisci assumenda officiis quae quisquam odio eius voluptatem, hic vitae at saepe. Sit inventore voluptatum necessitatibus eius itaque praesentium porro? Aliquam velit excepturi, dolor voluptas veritatis dolorem eum? Aliquid ullam repellendus odio et, quaerat quam tenetur magni est, sit eos deserunt nemo vel beatae ipsum fugit ab excepturi, rerum dicta ducimus assumenda. Natus, maiores fuga quo consequuntur, praesentium quae et rem adipisci, neque doloribus perspiciatis. Maiores maxime, asperiores quam eligendi aspernatur assumenda consequatur. Hic perspiciatis perferendis ducimus, est eveniet enim commodi modi doloribus rem fugiat praesentium quod cum?"
    //         },
    //     ]
        
    // ]
})