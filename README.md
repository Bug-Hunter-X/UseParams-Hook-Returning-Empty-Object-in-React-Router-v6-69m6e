# useParams Hook Returning Empty Object in React Router v6

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The problem arises when trying to access route parameters from a component that's not a direct child of the route defining those parameters.  This results in `useParams` returning an empty object, leading to unexpected behavior or errors.

## Problem Description

The `useParams` hook requires the correct routing context to function correctly. If you use it in a component that's too deeply nested or not within the relevant route's hierarchy, it won't be able to access the parameters.

## Solution

The most effective way to resolve this is to ensure that the component using `useParams` is a direct child or a descendant through other children components of the route that defines the parameters.  Alternatively, you can use the `useLocation` hook and extract the parameters manually from the URL.