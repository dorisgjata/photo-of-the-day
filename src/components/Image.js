export const getCourses = async (term, url) => {
  try {
    const response = await fetch(url, {
      body: JSON.stringify({ code: term.code }),
      method: "POST"
    })
    const courses = await response.json()
    return courses
  } catch (err) {
    return err
  }}