const{LinkedList} = require('./linkedList');

describe('LinkedList',() => {
    let List;

    beforeEach(()=>{
        list = new LinkedList();
    });

    test('test that linked list created is empty', ()=> {
        expect(list.head).toBeNull();
        expect(list.size).toEqual(0);

    });

    test('that a node can be added to the linked list', () => {
        //when
        list.append(10);
        //assert that
        expect(list.size).toEqual(1);
    })

    test('that a new node is inserted at the head ',() =>{
        list.insertAtHead(10);
        expect(list.head).toBe(20);
        expect(list.size).toBe(2);

    })

    test('should retrieve nodes by data or return null if out of bounds', () => {
        list.insertAtHead(10);
        list.insertAtHead(20);

        expect(list.getByIndex(0).value).toBe(20);
        expect(list.getByIndex(1).value).toBe(10);
        expect(list.getByIndex(2)).toBeNull();
        expect(list.getByIndex(-1)).toBeNull();
    });




})