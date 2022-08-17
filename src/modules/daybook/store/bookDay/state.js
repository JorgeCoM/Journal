export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), 
            date: new Date().toDateString(),
            text: `Entrada 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam officia facere sed totam saepe,
            tenetur in similique placeat quis sit architecto soluta molestias ut temporibus, hic non aspernatur aperiam!`,
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, 
            date: new Date().toDateString(),
            text: `Entrada 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam officia facere sed totam saepe,
            tenetur in similique placeat quis sit architecto soluta molestias ut temporibus, hic non aspernatur aperiam!`,
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, 
            date: new Date().toDateString(),
            text: `Entrada 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam officia facere sed totam saepe,
            tenetur in similique placeat quis sit architecto soluta molestias ut temporibus, hic non aspernatur aperiam!`,
            picture: null,
        }
    ]
})