// The Link Resolver takes a Prismic document as its argument
export default function(doc) {
   
    if (doc.type === "home") {
      
      return "/";
    }
    if (doc.uid) {
      return "/" + doc.uid;
    }
    return "/404";
} 