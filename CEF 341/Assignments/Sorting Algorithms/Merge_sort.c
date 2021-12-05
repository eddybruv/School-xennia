/**
 * @file Merge_sort.c
 * @author xennia316/ Amehmbo Sonia
 * @brief merging two seperately sorted sub-lists with a merge function.
 * @version 0.1
 * @date 2021-12-05
 * 
 * @copyright Copyright (c) 2021
 * 
 */
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

void merge(int arr[], int l, int m, int r)
{
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];

    for(i = 0; i < n1; i++)
    L[i] = arr[l + i];

    for(j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;

    while(i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
        
    }


    while( i < n1)
    {
        arr[k] = R[j];
        j++;
        k++;
    }

}
//Merging sorted function
void mergeSort(int arr[], int l, int r)
{
    if(l < r)
    {
        int m = l + (r - 1) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
//Printing out the array.

void printArray(int A[], int size)
{
    int i;
    for(i = 0; i < size; i++)
    printf("%d ", A[i]);
    printf("\n");
}

int main(void)
{
    int arr[] = { -10, 13, 2, 316, 52, 100, 24, 50, 32};
    int arr_size = sizeof(arr) / sizeof(arr[0]);
    printf("The given array is: \n");
    printArray(arr, arr_size);
    mergeSort(arr, 0, arr_size -1);
    printf("nSorted array is: \n");
    printArray(arr, arr_size);

 return 0;
}