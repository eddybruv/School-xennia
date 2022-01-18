/**
 * @file stack.c
 * @author Sonia Amehmbo @xennia316
 * @brief Exam 20220/2021 question 3, exercise 1. FET level 300.
 * @version 0.1
 * @date 2022-01-18
 * 
 * @copyright Copyright (c) 2022
 * 
 */
//push, pop, top.

#include <stdio.h>
#include <stdlib.h>

 typedef struct node
{
    int data;
    struct node *next;
}node;

node *push(node *first, int a)
{
    node *new_node;
    new_node = malloc(sizeof(node));
    new_node->data = a;
    new_node->next = first;
    first = new_node;

    return first;
}

node * pop(node *first)
{
    node *del;
    del = first;
    first = first->next;
    free(del);

    return first;
}

void display (node *first)
{
    while(first != NULL)
    {
        printf("%d -> ", first->data);
        first = first->next;
    }
    printf("NULL\n");
}

void top(node *first)
{
    printf("%d\n", first->data);
    //displaying data in first element.
}

void reverse_print (node *first)
{
    if(first == NULL)
    {
        return;
    }
    reverse_print(first->next);
    printf("%d -> ", first->data);
}

int main(void)
{
    node *stack;
    stack = NULL;
    for (int i = 0; i <= 20; i++)
        stack = push(stack, i);
    printf("The stack: ");
    display(stack);
    printf("The top element: ");
    top(stack);
    printf("Stack reversed: ");
    reverse_print(stack);
    printf("NULL\n");

    return 0;
}