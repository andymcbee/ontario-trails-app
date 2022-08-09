import slugify from "slugify";

const slugifyString = (string) => {
  console.log("SLUG IFY");
  console.log(string);

  // replae all /'s with -'s and make it low case
  var newStr = string.replace(/\//g, "-");
  console.log(newStr);

  //then run through slugify import

  const slug = slugify(newStr, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    // remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  console.log(slug);

  return slug;
};

export default slugifyString;
