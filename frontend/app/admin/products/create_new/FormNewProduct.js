import React from 'react'

const FormNewProduct = () => {
  return (
    <form>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>
    </form>
  );
}

export default FormNewProduct