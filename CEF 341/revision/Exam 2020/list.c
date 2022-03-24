#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct node
{
    int data;
    struct node *next;
};

bool search_list(struct node *first, int b)
{
    //traversing through the list.
    while (first != NULL)
    {
        //if data is equal to value return true
        if (first->data == b)
            return true;
        first = first->next;
    }
    return false;
}

//<struct node *> because we are returning a pointer(to the new head of the list) of type struct node
struct node *add_to_list(struct node *first, int a)
{
    // creating a temporary variable to point to memory address of type struct node.
    struct node *new_node;
    //allocating memory for this memory address.
    new_node = malloc(sizeof(struct node));

    // //storing an integer in the member <data> in the new node
    // printf("Enter a number: ");
    // scanf("%d", &new_node->data);

    new_node->data = a;

    //inserting <new_node> into the list.
    new_node->next = first; //next (pointer in the new node) is assigned(pointing to) first(the pointer to the first node of the list)
    first = new_node;       // first shifts and points to thenew node.

    return first;
}

void display(struct node *first)
{
    // reading the whole list untill first points to null
    while (first != NULL)
    {
        printf("%d -> ", first->data);
        first = first->next; // leaving the current node to the next before printing its data.
    }
    printf("NULL\n");
}

int main(void)
{
    struct node *list;
    list = NULL;
    bool c;

    for (int i = 2; i <= 20; i++)
        list = add_to_list(list, i);

    display(list);
    //the search result is stored as true or fault
    c = search_list(list, 0);
    if (c == true)
    {
        printf("Found\n");
    }
    else
        printf("Not found\n");

    return 0;
}