const math = require('mathjs')
const $ = require("./jquery-3.3.1.min.js")

var clear = false;

$(document).ready(() => 
{
    function AddToDisplay(str)
    {
        if (clear)
        {
            $(".calculator-display").html("")
            clear = false
        }
        $(".calculator-display").html($(".calculator-display").html() + str);
    }

    $(".numpad-1").click(() => 
    {
         AddToDisplay("1")
    })
    $(".numpad-2").click(() => 
    {
        AddToDisplay("2")
    })
    $(".numpad-3").click(() => 
    {
        AddToDisplay("3")
    })
    $(".numpad-4").click(() => 
    {
        AddToDisplay("4")
    })
    $(".numpad-5").click(() => 
    {
        AddToDisplay("5")
    })
    $(".numpad-6").click(() => 
    {
        AddToDisplay("6")
    })
    $(".numpad-7").click(() => 
    {
        AddToDisplay("7")
    })
    $(".numpad-8").click(() => 
    {
        AddToDisplay("8")
    })
    $(".numpad-9").click(() => 
    {
        AddToDisplay("9")
    })
    $(".numpad-0").click(() => 
    {
        AddToDisplay("0")
    })
    $(".numpad-plus").click(() => 
    {
        AddToDisplay("+")
    })
    $(".numpad-negative").click(() => 
    {
        AddToDisplay("-")
    })
    $(".numpad-multiply").click(() => 
    {
        AddToDisplay("*")
    })
    $(".numpad-divide").click(() => 
    {
        AddToDisplay("/")
    })
    $(".numpad-decimal").click(() => 
    {
        AddToDisplay(".")
    })
    $(".numpad-equals").click(() => 
    {
        clear = true
        try
        {
            $(".calculator-display").html("= " + math.eval($(".calculator-display").html()))
        } 
        catch(Exception)
        {
            $(".calculator-display").html("Invalid Input")    
        }
    })
})
