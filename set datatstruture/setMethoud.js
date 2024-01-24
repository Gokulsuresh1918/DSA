const set= new Set([1,2,3])
set.add(4)
set.delete(3)
console.log('has elemnet',set.has(2));
console.log("size",set.size);
for (const item of set) {
    console.log(item);
}