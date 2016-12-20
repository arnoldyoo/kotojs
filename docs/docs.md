# Chart

[src/chart.js:16-546](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L16-L546 "Source code on GitHub")

Create a koto chart

**Parameters**

-   `selection` **d3.selection** The chart's "base" DOM node. This should
           contain any nodes that the chart generates.

## transform

[src/chart.js:60-60](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L60-L60 "Source code on GitHub")

A "hook" method that you may define to modify input data before it is used
to draw the chart's layers and attachments. This method will be used by all
sub-classes. You may optionally return a promise if your data transformation
is asynchronous (i.e. you're using web workers).

Note: you will most likely never call this method directly, but rather
include it as part of a chart definition, and then rely on koto to
invoke it when you draw the chart with [Chart#draw](#chartdraw).

**Parameters**

-   `data` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Input data provided to @link Chart#draw}.

Returns **mixed** Data to be used in drawing the chart's layers and
                 attachments.

## demux

[src/chart.js:77-77](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L77-L77 "Source code on GitHub")

A "hook" method that you may define to choose which mutation of the input
data is sent to which of the attached charts (by name). This method will
be used by all sub-classes. This only applies to charts that use the
[Chart#attach](#chartattach) method.

Note: you will most likely never call this method directly, but rather
include it as part of a chart definition, and then rely on koto to
invoke it when you draw the chart with [Chart#draw](#chartdraw).

**Parameters**

-   `name`  
-   `data` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of attached chart defined in [Chart#attach](#chartattach).
-   `data` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Input data provided to [Chart#draw](#chartdraw).

Returns **mixed** Data to be used in drawing the chart's layers and
                 attachments.

## preDraw

[src/chart.js:92-92](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L92-L92 "Source code on GitHub")

A "hook" method that will allow you to run some arbitrary code before
[Chart#draw](#chartdraw). This will run every time [Chart#draw](#chartdraw) is called.

Note: you will most likely never call this method directly, but rather
include it as part of a chart definition, and then rely on koto to
invoke it when you draw the chart with [Chart#draw](#chartdraw).

Note 2: a `postDraw` event is also fired when appropriate;

**Parameters**

-   `data` **\[type]** [description]

Returns **\[type]** [description]

## postDraw

[src/chart.js:104-104](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L104-L104 "Source code on GitHub")

A "hook" method that will allow you to run some arbitrary code after
[Chart#draw](#chartdraw). This will run every time [Chart#draw](#chartdraw) is called.

Note: you will most likely never call this method directly, but rather
include it as part of a chart definition, and then rely on koto to
invoke it when you draw the chart with [Chart#draw](#chartdraw).

**Parameters**

-   `data` **\[type]** [description]

## postTransition

[src/chart.js:120-120](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L120-L120 "Source code on GitHub")

A "hook" method that will allow you to run some arbitrary code after
[Chart#draw](#chartdraw) is called AND after all transitions for all layers
and attached charts have been completed. This will run every time
[Chart#draw](#chartdraw) is called.

Note: you will most likely never call this method directly, but rather
include it as part of a chart definition, and then rely on koto to
invoke it when you draw the chart with [Chart#draw](#chartdraw).

Note 2: a `postTransition` event is also fired when appropriate;

**Parameters**

-   `data` **\[type]** 

## unlayer

[src/chart.js:128-135](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L128-L135 "Source code on GitHub")

Remove a layer from the chart.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the layer to remove.

Returns **[Layer](#layer)** The layer removed by this operation.

## layer

[src/chart.js:162-196](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L162-L196 "Source code on GitHub")

Interact with the chart's [layers](#layer).

If only a `name` is provided, simply return the layer registered to that
name (if any).

If a `name` and `selection` are provided, treat the `selection` as a
previously-created layer and attach it to the chart with the specified
`name`.

If all three arguments are specified, initialize a new [Layer](#layer) using
the specified `selection` as a base passing along the specified `options`.

The [Layer.draw](Layer.draw) method of attached layers will be invoked
whenever this chart's [Chart#draw](#chartdraw) is invoked and will receive the
data (optionally modified by the chart's [Chart#transform](#charttransform) method.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the layer to attach or retrieve.
-   `selection` **\[(d3.selection | [Layer](#layer))]** The layer's base or a
           previously-created [Layer](#layer).
-   `options` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** Options to be forwarded to [       constructor](<Layer|the Layer>)

Returns **[Layer](#layer)** 

## attach

[src/chart.js:210-217](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L210-L217 "Source code on GitHub")

Register or retrieve an "attachment" Chart. The "attachment" chart's `draw`
method will be invoked whenever the containing chart's `draw` method is
invoked.

**Parameters**

-   `attachmentName` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the attachment
-   `chart` **\[[Chart](#chart)]** koto to register as a mix in of this chart. When
           unspecified, this method will return the attachment previously
           registered with the specified `attachmentName` (if any).

Returns **[Chart](#chart)** Reference to this chart (chainable).

## draw

[src/chart.js:231-264](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L231-L264 "Source code on GitHub")

Update the chart's representation in the DOM, drawing all of its layers and
any "attachment" charts (as attached via [Chart#attach](#chartattach)).

Note: The first time you call this method, the property `hasDrawn` will be
set to true. This is helpful if you want to only run some code on the first
time the chart is drawn.

**Parameters**

-   `data` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Data to pass to the [draw method](#layerdraw) of
           this cart's [layers](#layer) (if any) and the [draw method](#chartdraw) of this chart's attachments (if any).
-   `rawData`  

## on

[src/chart.js:280-296](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L280-L296 "Source code on GitHub")

Subscribe a callback function to an event triggered on the chart. See [Chart#once](#chartonce) to subscribe a callback function to an event for one occurrence.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the event
-   `callback` **ChartEventHandler** Function to be invoked when the event
           occurs
-   `context` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** Value to set as `this` when invoking the
           `callback`. Defaults to the chart instance.

Returns **[Chart](#chart)** A reference to this chart (chainable).

## once

[src/chart.js:314-321](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L314-L321 "Source code on GitHub")

Subscribe a callback function to an event triggered on the chart. This
function will be invoked at the next occurrence of the event and immediately
unsubscribed. See [Chart#on](#charton) to subscribe a callback function to an
event indefinitely.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the event
-   `callback` **ChartEventHandler** Function to be invoked when the event
           occurs
-   `context` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** Value to set as `this` when invoking the
           `callback`. Defaults to the chart instance

Returns **[Chart](#chart)** A reference to this chart (chainable)

## off

[src/chart.js:340-367](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L340-L367 "Source code on GitHub")

Unsubscribe one or more callback functions from an event triggered on the
chart. When no arguments are specified, _all_ handlers will be unsubscribed.
When only a `name` is specified, all handlers subscribed to that event will
be unsubscribed. When a `name` and `callback` are specified, only that
function will be unsubscribed from that event. When a `name` and `context`
are specified (but `callback` is omitted), all events bound to the given
event with the given context will be unsubscribed.

**Parameters**

-   `name` **\[[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Name of the event to be unsubscribed
-   `callback` **\[ChartEventHandler]** Function to be unsubscribed
-   `context` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** Contexts to be unsubscribed

Returns **[Chart](#chart)** A reference to this chart (chainable).

## trigger

[src/chart.js:380-387](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L380-L387 "Source code on GitHub")

Publish an event on this chart with the given `name`.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the event to publish
-   `arguments` **...Any** Values with which to invoke the registered
           callbacks.
-   `args` **...Any** 

Returns **[Chart](#chart)** A reference to this chart (chainable).

## destroy

[src/chart.js:394-410](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L394-L410 "Source code on GitHub")

Cleanly dispose of chart

Returns **Any** undefined

## config

[src/chart.js:420-490](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L420-L490 "Source code on GitHub")

Get and set chart options (or configs)

**Parameters**

-   `nameOrObject` **mixed** Name of item getting or setting
                                 or an object with key-value pairs.
-   `value` **mixed** The value for config item with that name.

Returns **mixed** if getting: the value. if setting: the chart instance.

## accessor

[src/chart.js:500-519](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L500-L519 "Source code on GitHub")

This will get or set any of the chart's accessors.

**Parameters**

-   `item`  
-   `value` **\[[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)]** The function to update accessor item with.

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The chart to preserve chainability.

## extend

[src/chart.js:526-544](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L526-L544 "Source code on GitHub")

This will extend a chart by passing in an object of initialize function.

**Parameters**

-   `init`  

Returns **Construtor** Chart constructor

## Layer

[src/chart.js:551-551](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/chart.js#L551-L551 "Source code on GitHub")

Expose the Layer class so that it can be subclassed.

# Layer

[src/layer.js:17-246](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/layer.js#L17-L246 "Source code on GitHub")

Create a layer using the provided `base` selection.

**Parameters**

-   `base` **d3.selection** The containing DOM node for the layer.
-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Overrides for databind, insert and event methods.
    -   `options.databind` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** databind override
    -   `options.insert` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** insert override
    -   `options.events` **\[[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)]** life-cycle event handler overrides.
                                         Possible values are [enter, update, merge, exit]
                                         with or without the 'transition postfix'.

## dataBind

[src/layer.js:44-46](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/layer.js#L44-L46 "Source code on GitHub")

Invoked by [Layer#draw](#layerdraw) to join data with this layer's DOM nodes. This
implementation is "virtual"--it _must_ be overridden by Layer instances.

**Parameters**

-   `data` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Value passed to [Layer#draw](#layerdraw)
-   `context` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** the instance of this layers

## insert

[src/layer.js:53-55](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/layer.js#L53-L55 "Source code on GitHub")

Invoked by [Layer#draw](#layerdraw) in order to insert new DOM nodes into this
layer's `base`. This implementation is "virtual"--it _must_ be overridden by
Layer instances.

## on

[src/layer.js:68-83](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/layer.js#L68-L83 "Source code on GitHub")

Subscribe a handler to a lifecycle event. These events (and only these
events) are triggered when [Layer#draw](#layerdraw) is invoked--see that method
for more details on lifecycle events.

**Parameters**

-   `eventName` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Identifier for the lifecycle event for which to
           subscribe.
-   `handler` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Callback function
-   `options`  

Returns **[Chart](#chart)** Reference to the layer instance (for chaining).

## off

[src/layer.js:95-118](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/layer.js#L95-L118 "Source code on GitHub")

Unsubscribe the specified handler from the specified event. If no handler is
supplied, remove _all_ handlers from the event.

**Parameters**

-   `eventName` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Identifier for event from which to remove
           unsubscribe
-   `handler` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Callback to remove from the specified event

Returns **[Chart](#chart)** Reference to the layer instance (for chaining).

## draw

[src/layer.js:135-245](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/layer.js#L135-L245 "Source code on GitHub")

Render the layer according to the input data. Bind the data to the layer
(according to [Layer#dataBind](#layerdatabind), insert new elements (according to
[Layer#insert](#layerinsert), make lifecycle selections, and invoke all relevant
handlers (as attached via [Layer#on](#layeron)) with the lifecycle selections.

-   update
-   update:transition
-   enter
-   enter:transition
-   exit
-   exit:transition

**Parameters**

-   `data` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Data to drive the rendering.

# kotoAssert

[src/assert.js:6-11](https://github.com/kotojs/kotojs/blob/49e994f0cd93544e48b6bb61ce7697357b232b5e/src/assert.js#L6-L11 "Source code on GitHub")

Simple Assertion function

**Parameters**

-   `test` **anything** Anything that will evaluate to true of false.
-   `message` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The error message to send if `test` is false
