function GUI( option ) {

  this.GUI_El = null

  const { el, gui } = option

  const GUI_El = document.createElement( 'div' )
  this.GUI_El = GUI_El

  this._setStyle( GUI_El, {
    maxHeight: '100%',
    position: 'absolute',
    padding: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    right: 0,
    zIndex: 10,
    fontSize: '12px',
    overflow: 'auto'
  } )

  if ( gui ) {

    const { id, style } = gui

    if ( id ) GUI_El.id = id
    if ( style ) this._setStyle( GUI_El, style )

  }

  const APPEND_EL = document.querySelector( el )
  if ( APPEND_EL ) APPEND_EL.appendChild( GUI_El )
  else document.body.appendChild( GUI_El )

}

GUI.prototype.addTitle = function ( option ) {

  const { style = {}, text } = option

  const addEl = this._addEle( {
    tag: 'div',
    text,
    style: Object.assign( {
      fontSize: '14px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
      padding: '4px 18px'
    }, style )
  } )

  this.GUI_El.appendChild( addEl )

  return addEl

}

GUI.prototype.addButton = function ( option ) {

  const { style = {} } = option

  const row = this._addEle( {
    tag: 'div',
    style: Object.assign( {
      margin: '6px',
      textAlign: 'right'
    }, style )
  } )

  const addEl = this._addEle(
    Object.assign( option, {
      tag: 'button'
    }, {
      style: {
        color: '#ccc'
      }
    } )
  )
  row.appendChild( addEl )

  this.GUI_El.appendChild( row )

  return addEl

}

GUI.prototype.addInput = function ( option ) {

  const row = this._addEle( {
    tag: 'div',
    style: {
      margin: '6px'
    }
  } )

  const { label, checked } = option

  row.appendChild( this._addLabel( { text: label } ) )

  const addEl = this._addEle(
    Object.assign( option, {
      tag: 'input',
      type: 'text'
    } )
  )
  addEl.checked = checked

  row.appendChild( addEl )

  this.GUI_El.appendChild( row )

  return addEl

}

GUI.prototype.addColor = function ( option ) {

  const row = this._addEle( {
    tag: 'div',
    style: {
      margin: '6px',
    }
  } )

  const { label } = option

  row.appendChild( this._addLabel( { text: label } ) )

  const addEl = this._addEle(
    Object.assign( option, {
      tag: 'input',
      type: 'color'
    } )
  )

  row.appendChild( addEl )

  this.GUI_El.appendChild( row )

  return addEl

}

GUI.prototype.addCheckBox = function ( option ) {

  const row = this._addEle( {
    tag: 'div',
    style: {
      margin: '6px',
    }
  } )

  const { label, checked } = option

  row.appendChild( this._addLabel( { text: label } ) )

  const addEl = this._addEle(
    Object.assign( option, {
      tag: 'input',
      type: 'checkbox'
    } )
  )
  addEl.checked = checked

  row.appendChild( addEl )

  this.GUI_El.appendChild( row )

  return addEl

}

GUI.prototype.addRange = function ( option ) {

  const row = this._addEle( {
    tag: 'div',
    style: {
      margin: '6px',
    }
  } )

  const { label, value, max, min, step, unit = '' } = option

  row.appendChild( this._addLabel( { text: label } ) )

  const before = this._addEle( {
    tag: 'span',
    text: min,
    style: {
      display: 'online-block',
      padding: '0 4px',
      color: '#ccc',
      fontSize: '12px'
    }
  } )
  row.appendChild( before )

  const addEl = this._addEle(
    Object.assign( option, {
      tag: 'input',
      type: 'range',
      style: {
        verticalAlign: 'middle'
      }
    } )
  )
  addEl.max = max
  addEl.min = min
  addEl.step = step
  addEl.value = value
  row.appendChild( addEl )

  const after = this._addEle( {
    tag: 'span',
    text: max + unit,
    style: {
      display: 'online-block',
      padding: '0 4px',
      color: '#ccc',
      fontSize: '12px'
    }
  } )
  row.appendChild( after )

  this.GUI_El.appendChild( row )

  return addEl

}

GUI.prototype.addSelect = function ( option ) {

  const { label, options, onChange } = option

  const row = this._addRow()

  row.appendChild( this._addLabel( { text: label } ) )

  const select = this._addEle( {
    tag: 'select',
    onChange
  } )

  options.map( item => {

    select.appendChild( this._addEle( {
      tag: 'option',
      text: item.label,
      value: item.value
    } ) )

  } )

  row.appendChild( select )

  this.GUI_El.appendChild( row )

}

GUI.prototype._addRow = function () {

  const row = this._addEle( {
    tag: 'div',
    style: {
      margin: '6px',
    }
  } )

  return row

}

GUI.prototype._addLabel = function ( option ) {

  const { text } = option

  const labelEl = this._addEle( {
    tag: 'span',
    text,
    style: {
      paddingRight: '8px',
      color: '#ccc',
      display: "inline-block",
      textAlign: 'right'
    }
  } )

  return labelEl

}

GUI.prototype._addEle = function ( option ) {

  const { tag, type, id, className, style, text, value, hide, onClick, onChange, onInput } = option

  const addEl = document.createElement( tag )
  // 属性
  if ( type ) addEl.type = type
  if ( id ) addEl.id = id
  if ( className ) addEl.className = className
  if ( text !== null && text !== undefined ) addEl.innerText = text
  if ( value !== null && value !== undefined ) addEl.value = value
  // 样式
  if ( style ) this._setStyle( addEl, style )
  // 方法
  if ( onClick ) addEl.onclick = onClick
  if ( onChange ) addEl.onchange = onChange
  if ( onInput ) addEl.oninput = onInput

  addEl.hide = function () {
    addEl.style.display = 'none'
    return addEl
  }
  addEl.show = function ( display ) {
    addEl.style.display = display || 'block'
    return addEl
  }

  if ( hide ) addEl.hide()

  return addEl

}

GUI.prototype._setStyle = function ( dom, style ) {

  if ( !dom || this._typeOf( style ) !== 'object' ) return

  for ( const i in style ) {
    dom.style[i] = style[i]
  }

}

GUI.prototype._typeOf = function ( val ) {

  return Object.prototype.toString.call( val ).split( '[object ' )[1].split( ']' )[0].toLowerCase()

}

module.exports = GUI
