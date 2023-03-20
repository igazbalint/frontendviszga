function getElementsByXpath(xpathToExecute)
{
  var result = [];
  var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  for (var i=0 ; i < nodesSnapshot.snapshotLength; i++)
  {
    result.push( nodesSnapshot.snapshotItem(i) );
  }
  return result;
}

function getElementByXpath(xpathToExecute)
{
  return document.evaluate(xpathToExecute, document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
}

function getResultElement(result)
{
	let resElement = document.createElement("p");
	resElement.style.fontWeight = "bold";
	resElement.style.marginTop = "0px";
	resElement.style.marginBottom = "0px";
	resElement.style.borderBottom = "1px solid";
	if(result)
	{
		resElement.style.color = "green";
		resElement.style.backgroundColor = "#d4ffd1";
	}
	else
	{
		resElement.style.color = "red";
		resElement.style.backgroundColor = "#ffd1d1";
	}
	return resElement;
}

function testBase(resultContainer, target, testFunction, testMessage)
{
	var result = null;
	try
	{
		if(testFunction(target))
		{
			result = getResultElement(true);
			result.innerHTML += "A teszt (\""+testMessage+"\") <u>sikeres</u>!";
			resultContainer.appendChild(result);
		}
		else
		{
			result = getResultElement(false);
			result.innerHTML += "A teszt (\""+testMessage+"\") <u>sikertelen</u>!";
			resultContainer.appendChild(result);
		}
	}
	catch
	{
		result = getResultElement(false);
		result.innerHTML += "A teszt (\""+testMessage+"\") <u>sikertelen</u>! Lefutási hiba, valószínűleg a hivatkozás nem található!";
	    resultContainer.appendChild(result);
	}
}