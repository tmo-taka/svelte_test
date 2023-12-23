declare type Tag = {
    id: {
        current: string,
        _type: 'slug'
    },
    name: string
}

declare type Content = {
    title: string,
    slug: {
        current: string,
        _type: 'slug'
    },
    published: boolean,
    mainVisual?: {
        asset: {
            ref: string
            _type: 'reference'
        }
        _type: 'image'
    }
    imageUrl?: string
    tags: TagLists
}

declare type ContentsLists = Content[]

declare type TagLists = Tag[]