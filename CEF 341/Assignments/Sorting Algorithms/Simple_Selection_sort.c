/**
 * @file Simple_Selection_sort.c
 * @author xennnia316
 * @brief Using simple selection to sort a list.
 * @version 0.1
 * @date 2021-12-05
 * 
 * @copyright Copyright (c) 2021
 * 
 */
#include <stdio.h>

//swapping a and b
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

//The selection Sort function.
void selectionSort(int arr[], int x)
{
    int i;
    int j;
    int min;

    for(i = 0; i < x - 1; i++)
    {
        min = i;
        for(j = i + 1; j < x; j++)
        if(arr[j] < arr[min]);
        min = j;
        swap(&arr[min], &arr[i]);
    }
}

// printing out the elements.

void output(int arr[], int size)
{
    int i;
    for(i = 0; i < size; i++)
    printf("%d ", arr[i]);
    printf("\n");
}

int main(void)
{
    
    int arr[] = {25, 39, 04, 23, 316, 52};
    int size = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, size);
    printf("Sorted array: \n");
    output(arr, size);

    return 0;
}