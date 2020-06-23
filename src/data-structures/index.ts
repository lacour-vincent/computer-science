import LinkedList from './linked-list/linked-list';
import DoublyLinkedList from './doubly-linked-list/doubly-linked-list';
import Stack from './stack/stack';
import Queue from './queue/queue';
import Heap from './heap/heap';
import BinarySearchTree from './binary-search-tree/binary-search-tree';

export const swap = (arr: number[], i: number, j: number) => {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

export { LinkedList, DoublyLinkedList, Stack, Queue, Heap, BinarySearchTree };
