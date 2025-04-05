# News App Using Next.js

# Routing and page rendering:

    File based routing, Component Types
    1. Understanding Routing.
    2. File name conventions and Project structure.
    3. Server Components vs client components.

1. icon.jpg in app folder will be used automatically for the fav icon of the website.

2. Parallel Routes :
   Add a new path in the app folder. (ex : archive)

   This archive page will contain two parallel pages or two parallel routes.

   Parallel routes is a feature of Next.js that allows us to render the content of two or more separates routes with separate paths on a single page.

   Parallel routes folder name starts with "@". (ex : @archive)

   The layout page has access to the parallel routes and can be found in the params, next.js adds the name of the parallel routes in the params.

   const ArchiveLayout = ({ archive, latest }) => {
   return (
   <!-- <div>
                <h1>News Archive</h1>
                <section id="archive-filter">{archive}</section>
                <section id="archive-latest">{latest}</section>
            </div> -->

   );
   };

   All the pages in the parallel route that are shown on the same page should support all the different paths that we want to use.

   Ex :: In archive path we have one page.js and one dynamic route but in latest we only have page.js so to support the dynamic route in latest so that it would not throw not found error we have to add a default.js page

   default.js is a fallout page. It is shown when the we want to show fallout content.

   If the content in the deafault.js and page.js is same we can eliminate the page.js component.

## Catch all routes :

    To create a route for catching all routes we have to create a route as [[...name_of_the_argument]]

    Than content of the page.js will be shown if anything appears in the URL after the "/archive"
    To access the value of the path in the component we can still use the params object

    params.name_of_the_argument = An array of all path segments

## Server Side Components & Client Side Components

    Server Side Components:
        1. Components are only rendered on the server. The entire component function is only executed on the server never on the client.


    Client Side Components:

        1. Components that are initially pre-rendered on the server,but also can be executed on the client side or browser.

        error.js must be client side component as the error can also happen on the client side.

## Intercepting routes:

    An intercepting route is an alternative route, which sometimes gets activated depending on wheather we are navigating to it through an internal link from with in the page or we are coming from an external link or we manually entered the URL or reload the page.

    So for the same path different pages are shown depending upon how we get there.

    The intercepting route intercepts an internal navigation request and instead of showing the page we would see if we relaod the page or come to the page from outside the website a different page will be shown.

    (path_of_the_folder_that_we_want_to_intercept)folder_name_that_we_want_to_intercept
    Ex : (.)image
