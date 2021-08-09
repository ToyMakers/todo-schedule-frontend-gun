export interface mockTodoType {
    id?: number;
    para: string;
    progress: boolean;
}

const mockTodo: Array<mockTodoType> = [
    {
        id: 1,
        para: 'Searching Company for me',
        progress: false,
    },
    {
        id: 2,
        para: 'Take Typescript lecture',
        progress: false,
    },
    {
        id: 3,
        para: 'Define Folder structure',
        progress: true,
    },
];

export default mockTodo;
