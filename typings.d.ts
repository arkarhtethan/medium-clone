export interface Post {
    _id: string,
    _createdAt: string,
    title: string,
    author: {
        _ref: string,
        name: string,
        image: string,
        _type: string
    },
    description: sting,
    mainImage: {
        asset: {
            url: string,
        }
    },
    slug: {
        current: string
    },
    body: [object],
    comments: Comment[]
}

export interface Comment {
    approved: boolean,
    comment: string,
    email: string,
    name: string,
    _id: string,
    _createdAt: string;
    _updatedAt: string;
}