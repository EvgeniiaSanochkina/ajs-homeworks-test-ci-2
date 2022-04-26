export default function putInOrder(list) {
    list.sort((prev, next) =>
        next.health - prev.health);
    return list;
}