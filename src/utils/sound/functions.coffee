define ->

	withAudioContext: (success, error) ->
    context = null
    if typeof AudioContext isnt "undefined"
        context = new AudioContext()
    else if typeof webkitAudioContext isnt "undefined"
        context = new webkitAudioContext()
    if context
      success context
    else error?()


  loadSounds: (context, urlList, success, error) ->

    bufferList = new Array()
    loadCount = 0

    loadBuffer = (url, index) ->
      request = new XMLHttpRequest()
      request.open "GET", url, true
      request.responseType = "arraybuffer"

      request.onload = ->
        context.decodeAudioData request.response, ((buffer) ->
          unless buffer
            throw Error "error decoding file data: " + url
          bufferList[index] = buffer
          success bufferList  if ++loadCount is urlList.length
        ), ->
          throw Error "decodeAudioData error"

      request.onerror = ->
        throw Error "SoundLoader: XHR error"

      request.send()

    try
      loadBuffer url, index for url, index in urlList
    catch e
      console.error e
      error? e

  source: (buffer, context) ->
    sound = context.createBufferSource()
    sound.buffer = buffer
    sound

