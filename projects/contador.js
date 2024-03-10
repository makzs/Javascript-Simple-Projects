const contValue = document.getElementById('cont');
let count = 0;

function plus()
{
    count++;
    contValue.textContent = count;
}

function minus()
{
    count--;
    contValue.textContent = count;

}

function reset()
{
    count = 0;
    contValue.textContent = count;

}
