/**
 * @file queue.c
 * @author Sonia Amehmbo @xennia316
 * @brief Implementation of queue using linked list
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <stdio.h>
#include <stdlib.h>

typedef struct queue
{
    int data;
    struct queue *next;
} queue;

queue *front = NULL, *rear = NULL;
void enqueue(int a)
{
    queue *new_node;
    new_node = malloc(sizeof(queue));

    new_node->data = a;
    new_node->next = NULL;

    //if queue is empty
    if (front == NULL && rear == NULL)
        front = rear = new_node;

    // if queue already has nodes
    else
    {
        rear->next = new_node;
        rear = new_node;
    }
    //     return new_node; no return type.
}

void dequeue(void)
{
    queue *temp;
    temp = malloc(sizeof(queue));

    if (front == NULL)
        printf("This queue is empty. Unable to delete from it.");

    else
    {
        temp = front;
        front = front->next;
        if (front == NULL)
            rear = NULL;
    }
    free(temp);
}

void print_queue(void)
{
    queue *temp = front;

    while (temp)
    {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

int main(void)
{
    enqueue(1);
    enqueue(3);
    enqueue(2);

    printf("Queue: ");
    print_queue();

    dequeue();

    printf("Queue after dequeue: ");
    print_queue();

    enqueue(5);

    printf("Queue after dequeue: ");
    print_queue();

    return 0;
}