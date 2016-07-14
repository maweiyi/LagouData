/**
 * Created by maweiyi on 7/14/16.
 */
var a = ['a','b','c'];
var json = {};
for(var i=0;i<a.length;i++)
{
    json[i]=a[i];
}
console.log(JSON.stringify(json));