// The Link Resolver takes a Prismic document as its argument
export default function(doc) {
   
    if (doc.type === "home") {
      
      return "/";
    }
    if (doc.type == 'events_page') {
      return "/events";
    }

    return "/not-found";
} 