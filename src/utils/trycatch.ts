export default async function trycatch(params: Promise<any>) {
  try {
    return [await params, null];
  } catch (e) {
    return [null, e];
  }
}
