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
