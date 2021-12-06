/**
 * @file linked-_list_queue.c
 * @author xennia316
 * @brief implementing a queue of integers using a linked list.
 * @version 0.1
 * @date 2021-12-01
 * 
 * @copyright Copyright (c) 2021
 * 
 */
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node* next;
}
*rear = NULL, *front = NULL;

struct  Node* newNode(int item)
{
    /* data for inserting new node*/
    struct  Node* node = (struct Node*)malloc(sizeof(struct Node));
    if (node != NULL)
    {
        /* add data in allocated node and return it*/
        node->data = item;
        node->next = NULL;
        return node;
    }
    else{
        printf("\nHeap Overflow");
        exit (EXIT_FAILURE);
    }
    
};

int dequeue()
{
    if (front == NULL){
        printf(" \n Queue Underflow");
        exit(EXIT_FAILURE);
    }
    struct Node* temp = front;
    printf("Removing %d\n", temp->data);

    front =  front -> next;

    if(front ==NULL){
        rear = NULL;
    }

    int item = temp ->data;
    free(temp);
    return item;
}

// adding an item to the queue

void enqueue(int item)
{
    struct Node* node = newNode(item);
    printf("Inserting %d\n", item);

    if (front == NULL)
    {
        front = node;
        rear = node;
    }
    else{
        rear -> next = node;
        rear = node;
    }
}

int peek()
{
    if(front != NULL)
    {
        return front ->data;
    }
    else
    {
        exit(EXIT_FAILURE);
    }
}

int isEmpty()
{
    return rear == NULL && front == NULL;
}

int main()
{
    enqueue(05);
    enqueue(06);
    enqueue(07);
    enqueue(04);

        printf("The front element is %d\n", peek());

    dequeue();
    dequeue();
    dequeue();
    dequeue();

        if (isEmpty())
        {
            printf("The queue is empty\n");
        }
        else{
            printf("The queue is not empty\n");
        }

        return 0;
}
